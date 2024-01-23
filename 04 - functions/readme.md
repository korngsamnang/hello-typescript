## Function Parameter Annotations
Function parameter annotations in TypeScript are used to specify the expected types of the parameters that a function takes.

```typescript
function greet(name: string) {
    console.log(`Hello, ${name}!`);
}
```

In this example, we're declaring a function greet with a single parameter name. The name parameter is annotated with the type string, which means that it can only accept string values.

If we call the greet function with a non-string value, TypeScript will show an error:

```typescript
greet('John'); // OK
greet(42); // Error: Argument of type '42' is not assignable to parameter of type 'string'.
```

## Default Parameter
Default parameters in TypeScript allow you to specify a default value for a function parameter if one is not provided when the function is called.

Here's an example:

```typescript
function greet(name: string = "world") {
    console.log(`Hello, ${name}!`);
}

greet(); // Output: "Hello, world!"
greet("John"); // Output: "Hello, John!"
```

In this example, we declare a function greet that takes a single parameter name, which has a default value of 'world'. If the name parameter is not provided when the function is called, it will default to 'world'.

When we call greet() without any arguments, it outputs "Hello, world!". When we call greet('John'), it outputs "Hello, John!".

## Function Return Type Annotations
Function return type annotations in TypeScript are used to specify the expected type of the value that a function returns.

Here's an example:

```typescript
function add(a: number, b: number): number {
    return a + b;
}
```

In this example, we're declaring a function add that takes two number parameters a and b. The function is annotated with a return type of number, which means that it must return a numeric value.

If the function doesn't return a value that matches the specified return type, TypeScript will show an error:

```typescript
add(1, 2); // OK
add(1, '2'); // Error: Argument of type '"2"' is not assignable to parameter of type 'number'.
```

## Void Return Type
Void return type in TypeScript is used to specify that a function doesn't return a value.

Here's an example:

```typescript
function greet(name: string): void {
    console.log(`Hello, ${name}!`);
}
```

In this example, the function logMessage takes in a message parameter of type string, logs it to the console, but does not return any value. Therefore, its return type is void.

## Never Return Type
Never return type in TypeScript is used to specify that a function never returns a value. The never keyword is used to indicate that a function will not return anything, or that a variable can never have a value.

Here are some common use cases for the never type:
1. A function that throws an error:
    ```typescript
    function throwError(message: string): never {
        throw new Error(message);
    }
    ```
   The above function takes in a message of type string, throws an error with that message, and never returns anything. The return type of this function is never.
2. A function that has an infinite loop:
    ```typescript
    function infiniteLoop(): never {
        while (true) {
            // ...
        }
    }
    ```
   The above function has an infinite loop, which means that it will never return anything. Therefore, its return type is never.
3. A variable that can never have a value:
    ```typescript
    let x: never;
    ```
   The above variable x can never have a value because it is of type never. Therefore, it can only be assigned to other variables of type never.


The never type is useful for indicating that certain code paths should never be reached, or that certain values are impossible. It can help catch errors at compile-time instead of runtime.