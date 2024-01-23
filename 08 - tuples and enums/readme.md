## Tuples and Enums

1. [Tuples](#tuples)
2. [Enums](#enums)


## Tuples
In TypeScript, a tuple is a type that represents an array with a fixed number of elements, where each element can have a different type. The order of the types in the tuple definition corresponds to the order of the values in the actual array. Tuples are similar to arrays, but they have a specific structure and can be used to model finite sequences with known lengths.

You can define a tuple type by specifying the types of its elements enclosed in square brackets, separated by commas:

```typescript
let tuple: [string, number, boolean];
tuple = ["hello", 10, true]; // OK
tuple = [10, "hello", true]; // Error
```

This declares a tuple type with three elements: a string, a number, and a boolean. The first element must be a string, the second must be a number, and the third must be a boolean. The following assignment is valid because it follows the order of the types in the tuple definition. The second assignment is invalid because it violates the order of the types in the tuple definition.

You can access individual elements of a tuple using indexing syntax:

```typescript
console.log(tuple[0]); // "hello"   
console.log(tuple[1]); // 10
console.log(tuple[2]); // true
```

Note that you can also use destructuring syntax to extract individual elements from a tuple:

```typescript
let [a, b, c] = tuple;
console.log(a); // "hello"
console.log(b); // 10
console.log(c); // true
```

Tuples are useful when you need to represent a fixed set of values where each value has a different type. For example, you might use a tuple to represent a 2D point with x and y coordinates:

```typescript
let point: [number, number] = [3, 4];
```

Or you might use a tuple to represent a person's name and age:

```typescript
let person: [string, number] = ["John", 25];
```

## Enums
In TypeScript, an enum is a way to define a set of named constants. Enums allow you to define a collection of related values that can be used interchangeably in your code.

For example, let's say you're building a weather app and you want to define a set of possible weather conditions like "sunny", "cloudy", "rainy", and "snowy". You could define an enum like this:

```typescript
enum WeatherCondition {
  Sunny,
  Cloudy,
  Rainy,
  Snowy
}
```

In this example, WeatherConditions is the name of the enum, and each of the values (e.g. Sunny, Cloudy, etc.) is assigned an automatic numerical value starting from 0. You can also assign specific values to each enum member like this:

```typescript
enum WeatherCondition {
  Sunny = "sunny",
  Cloudy = "cloudy",
  Rainy = "rainy",
  Snowy = "snowy"
}
```

In this case, each enum member is explicitly given a string value.

You can use enums in your code by referring to them by their name, for example:

```typescript
const currentWeather = WeatherConditions.Sunny;
console.log(`The current weather is ${currentWeather}`);
// Output: The current weather is Sunny
```

Enums are a useful tool for creating more readable and maintainable code by providing a way to define a set of related values with clear, meaningful names.