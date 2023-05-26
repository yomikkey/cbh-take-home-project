const { deterministicPartitionKey } = require("./dpk");
const crypto = require("crypto");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  it("should return trivial partition key if no event is provided", () => {
    const result = deterministicPartitionKey();
    expect(result).toBe("0");
  });

  it("should use the event's partitionKey if available", () => {
    const event = {
      partitionKey: "custom-key",
    };
    const result = deterministicPartitionKey(event);
    expect(result).toBe("custom-key");
  });

  it("should hash the event and return the partition key if partitionKey is not available", () => {
    const event = {
      data: "test",
    };
    const result = deterministicPartitionKey(event);
    const hashedData = crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex");
    expect(result).toBe(hashedData);
  });

  it("should stringify non-string partition key candidates", () => {
    const event = {
      partitionKey: 12345,
    };
    const result = deterministicPartitionKey(event);
    expect(result).toBe(JSON.stringify(12345));
  });

  it("should hash the partition key if its length exceeds the maximum limit", () => {
    const longKey = "a".repeat(300);
    const result = deterministicPartitionKey({ partitionKey: longKey });
    const hashedKey = crypto.createHash("sha3-512").update(longKey).digest("hex");
    expect(result).toBe(hashedKey);
  });
});
