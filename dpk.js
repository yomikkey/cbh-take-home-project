const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  let candidate = getEventPartitionKey(event);

  if (!candidate) {
    candidate = TRIVIAL_PARTITION_KEY;
  }

  candidate = stringifyCandidate(candidate);

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = hashCandidate(candidate);
  }

  return candidate;
};

function getEventPartitionKey(event) {
  return event?.partitionKey || hashEvent(event);
}

function hashEvent(event) {
  if (!event) {
    return "";
  }
  const data = JSON.stringify(event);
  return crypto.createHash("sha3-512").update(data).digest("hex");
}

function stringifyCandidate(candidate) {
  return typeof candidate !== "string" ? JSON.stringify(candidate) : candidate;
}

function hashCandidate(candidate) {
  return crypto.createHash("sha3-512").update(candidate).digest("hex");
}
