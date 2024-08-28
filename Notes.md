# TypeScript Notes

## Table of Contents
1. [Chapter 1: Setting Up TypeScript](#chapter-1-setting-up-typescript)
2. [Chapter 2: Basic Data Types](#chapter-2-basic-data-types)
3. [Chapter 3: Arrays and Objects](#chapter-3-arrays-and-objects)
4. [Chapter 4: Functions](#chapter-4-functions)
5. [Chapter 5: Type Assertions and Type Casting](#chapter-5-type-assertions-and-type-casting)
6. [Chapter 6: Classes](#chapter-6-classes)
7. [Chapter 7: Index Signatures and `keyof` Assertions](#chapter-7-index-signatures-and-keyof-assertions)
8. [Chapter 8: Generics](#chapter-8-generics)
9. [Chapter 9: Utility Types](#chapter-9-utility-types)

---

## Chapter 1: Setting Up TypeScript

To start working with TypeScript, you'll need to set up your project correctly. Here are the steps to follow:

1. **Watch Mode**:  
   Run the command:
   ```bash
   tsc main.ts -w
   ```
   This command will compile your TypeScript files and watch for any changes. If the same structure exists in both `.ts` and `.js` files, it may show errors for duplicate variables.

2. **Organizing Your Files**:  
   To avoid conflicts, it's recommended to organize your project files. You can create a `src` folder for raw TypeScript files and a `build` folder for compiled JavaScript files.

3. **Setting Up `tsconfig.json`**:
   - Run:
     ```bash
     tsc --init
     ```
     This will generate a `tsconfig.json` file where you can define configurations for the TypeScript compiler.

4. **Configuring `tsconfig.json`**:
   - Set the root directory for your TypeScript files:
     ```json
     "rootDir": "./src"
     ```
   - Set the output directory for the compiled JavaScript files:
     ```json
     "outDir": "./build/js"
     ```
   - The following command will watch all files from `rootDir` and compile them into `outDir`:
     ```bash
     tsc -w
     ```
   - Specify the target version of JavaScript to which TypeScript should be compiled:
     ```json
     "target": "es2016"
     ```
   - Include only the files in the `src` folder for compilation:
     ```json
     "include": ["src"]
     ```
   - To prevent the code from being compiled when there are errors, use:
     ```json
     "noEmitOnError": true
     ```

5. **Running TypeScript with Error Prevention**:
   - You can also run the TypeScript compiler with error prevention using the following command:
     ```bash
     tsc --noEmitOnError -w
     ```

## Chapter 2: Basic Data Types

TypeScript is a strongly typed language, in contrast to JavaScript, which is loosely typed. This means that TypeScript performs type checking at compile time (statically typed), whereas JavaScript does so at runtime (dynamically typed).

### Key Concepts:
- **Inferring Types**: TypeScript can infer the type of a variable even if it's not explicitly defined. For example, if you assign a string to a variable, TypeScript will infer it as a `string` type.
- **Basic Types**: Some of the basic types in TypeScript include `number`, `string`, `boolean`, and `union types`. It can also infer types like `RegExp`.

## Chapter 3: Arrays and Objects

In this chapter, you'll learn about working with arrays, objects, and some advanced TypeScript features.

### Key Concepts:
- **Arrays and Tuples**: Learn how to define arrays and tuples in TypeScript and the difference between them.
- **Type and Interface**: Understand how to define custom types and interfaces to enforce object structure.
- **Optional Properties**: Learn how to define optional properties in interfaces and types, and how to safely access them using optional chaining.
- **Enums**: Explore the new enum feature in TypeScript for defining a set of named constants.

## Chapter 4: Functions

Functions in TypeScript can be more robust with strong typing.

### Key Concepts:
- **Type Aliases**: Create aliases for complex types to make your code more readable.
- **Literal Types**: Define exact values a variable can hold.
- **Functions with Interface**: Enforce function shapes with interfaces.
- **Optional Params**: Learn how to define optional parameters in functions.
- **Rest Operators and Default Params**: Understand how to use rest operators for variable-length arguments and set default values for function parameters.
- **Never Type**: Learn about the `never` type, which represents values that never occur.
- **Custom Type Guards**: Create functions that narrow down types based on custom logic.

## Chapter 5: Type Assertions and Type Casting

TypeScript allows you to override its inferred and checked types using type assertions and type casting.

### Key Concepts:
- **More Specific and Less Specific Types**: Learn how to cast a value to a more or less specific type.
- **Double Casting using `unknown`**: Understand how to cast between types safely using the `unknown` type as an intermediary.
- **DOM Assertions**: Practice working with the DOM by asserting specific types to elements.

## Chapter 6: Classes

Classes in TypeScript offer object-oriented features with added type safety.

### Key Concepts:
- **Class and Visibility Modifiers**: Learn how to define classes and control the visibility of their members using `public`, `private`, and `protected`.
- **Inheritance**: Understand how to create subclasses that inherit properties and methods from a base class.
- **Interfaces**: Use interfaces to enforce the structure of classes.
- **Static Members**: Explore static properties and methods that belong to the class itself rather than an instance.
- **Getters and Setters**: Learn how to define getters and setters for encapsulating access to properties.

## Chapter 7: Index Signatures and `keyof` Assertions

TypeScript provides powerful tools for working with dynamic object structures.

### Key Concepts:
- **Index Signatures**: Define types for objects with dynamic keys.
- **Readonly**: Create immutable properties.
- **Optional Properties with `undefined`**: Handle properties that may or may not exist.
- **`keyof` and `keyof typeof`**: Use `keyof` to create types based on the keys of an object and `keyof typeof` to extract the keys from an object type.
- **`Record` Utility**: Learn how to create a type that maps a set of properties to a specific type.

## Chapter 8: Generics

Generics allow you to create flexible and reusable components.

### Key Concepts:
- **Generic Function**: Write functions that can work with any data type.
- **Generic Interface**: Create interfaces that can accept types as parameters.
- **Generic Class**: Define classes that can work with multiple data types.

## Chapter 9: Utility Types

TypeScript provides several utility types that simplify common type transformations.

### Key Concepts:
- **`Partial`**: Create a type that makes all properties in an object optional.
- **`Required`**: Opposite of `Partial`, it makes all properties required.
- **`Readonly`**: Create a type with all properties marked as `readonly`.
- **`Record`**: Create a type with a set of properties mapped to a specific type.
- **`Pick` and `Omit`**: Extract or remove properties from a type.
- **`Exclude` and `Extract`**: Remove or extract specific types from a union.
- **`NonNullable`**: Remove `null` and `undefined` from a type.
- **`ReturnType`**: Extract the return type of a function.
- **`Parameters`**: Get the types of parameters of a function.
- **`Awaited`**: Unwrap the type of a promise.
