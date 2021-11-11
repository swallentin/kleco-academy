# The Type System

The Type System represents the different types of values supported by the language. The Type System checks the validity of the supplied values, before they are stored or manipulated by the program. This ensures that the code behaves as expected. The Type System further allows for richer code hinting and automated documentation too.

TypeScript provides data types as a part of its optional Type System. The data type classification is as given below −

## Data Types

_The Any type_

The any data type is the super type of all types in TypeScript. It denotes a dynamic type. Using the any type is equivalent to opting out of type checking for a variable.

_Built-in types_

The following table illustrates all the built-in types in TypeScript −

| Data type | Keyword   | Description                                                                                              |
| --------- | --------- | -------------------------------------------------------------------------------------------------------- |
| Number    | number    | Double precision 64-bit floating point values. It can be used to represent both, integers and fractions. |
| String    | string    | Represents a sequence of Unicode characters                                                              |
| Boolean   | boolean   | Represents logical values, true and false                                                                |
| Void      | void      | Used on function return types to represent non-returning functions                                       |
| Null      | null      | Represents an intentional absence of an object value.                                                    |
| Undefined | undefined | Denotes value given to all uninitialized variables                                                       |

Note − There is no integer type in TypeScript and JavaScript.

**Null and undefined ─ Are they the same?**

The null and the undefined datatypes are often a source of confusion. The null and undefined cannot be used to reference the data type of a variable. They can only be assigned as values to a variable.

However, null and undefined are not the same. A variable initialized with undefined means that the variable has no value or object assigned to it while null means that the variable has been set to an object whose value is undefined.

**User-defined Types**

User-defined types include Enumerations (enums), classes, interfaces, arrays, and tuple. These are discussed in detail in the later chapters.

**Differences Between Type Aliases and Interfaces**

Almost all features of an interface are available isn type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

_Interface_

```js
interface Window {
  title: string
}

interface Window {
  ts: import("typescript")
}

const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});
```

_Type_

```ts
type Window = {
  title: string;
};

type Window = {
  ts: import("typescript");
};

// Error: Duplicate identifier 'Window'.
```
