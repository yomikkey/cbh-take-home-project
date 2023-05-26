# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

In the refactored code, I made several changes to improve readability and maintainability:

Extracted helper functions: I moved the logic for getting the event's partition key and hashing the event into separate functions (getEventPartitionKey, hashEvent, stringifyCandidate, and hashCandidate). This makes the code more modular and easier to understand.

Removed unnecessary if statements: I removed the nested if statements and instead used guard clauses to simplify the code flow. This avoids unnecessary indentation and improves readability.

Improved variable naming: I used more descriptive variable names to enhance code readability. For example, candidate is now used consistently throughout the function instead of being reassigned multiple times.

Utilized optional chaining and nullish coalescing: I used optional chaining (?.) and nullish coalescing (||) operators to handle cases where the event object or its properties might be undefined or null.