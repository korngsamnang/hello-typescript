## Union Types

1. [Unions](#unions)
2. [Literal Types](#literal-types)

### Unions
In TypeScript, unions are used to declare a type that can have one of several possible types. Unions are useful when we want to allow a variable or parameter to accept multiple types.

The syntax for defining a union type in TypeScript uses the pipe symbol (|). 

For example, if we want to define a variable that can be either a number or a string, we would write:

```typescript
let id: number | string;
```
This means that `id` can hold a value of type number or string.

We can also use unions with function parameters. For example, if we have a function that accepts either a string or an array of strings, we could define its parameter like this:

```typescript
function foo(param: string | string[]) {
  // function body
}
```

Unions can also be combined with other types in TypeScript, such as interfaces and classes. For example, we could define an interface that has a property that can be either a string or a number:

```typescript
interface MyInterface {
    myProp: string | number;
}
```

Overall, unions in TypeScript provide a flexible way to work with variables and parameters that can have different types.


### Literal Types
In TypeScript, literal types allow you to specify a value that can only be one specific literal value. This means that a variable with a literal type can only have one specific value and no other.

There are several types of literal types in TypeScript:
1. String Literal Types: This allows you to specify the exact value of a string that a variable can contain. For example:
    
    ```typescript
    let color: "red" | "blue" | "green";
    color = "red"; // valid
    color = "yellow"; // invalid
    ```

2. Numeric Literal Types: This allows you to specify the exact value of a number that a variable can contain. For example:
    
    ```typescript
    let number: 1 | 2 | 3;
    number = 1; // valid
    number = 4; // invalid
    ```
   
3. Boolean Literal Types: This allows you to specify the exact value of a boolean that a variable can contain. For example:

    ```typescript
    let isTrue: true;
    isTrue = true; // valid
    isTrue = false; // invalid
    ```