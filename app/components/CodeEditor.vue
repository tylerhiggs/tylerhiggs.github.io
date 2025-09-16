<template>
  <div
    class="relative flex w-full flex-col items-center overflow-x-auto pb-8 px-8 border border-zinc-300 has-focus-within:border-violet-500 rounded-lg"
  >
    <div v-if="tokens?.tokens" class="relative mt-4 flex w-full">
      <div class="flex w-full text-lg">
        <pre class="relative flex flex-col text-lg break-words whitespace-pre">
          <code class="relative flex flex-col"><span
              v-for="(line, lineIndex) in tokens.tokens"
              :key="lineIndex"
              class="line block indent-0 relative min-h-[1lh] text-lg"
            ><span
                v-for="(token, tokenIndex) in line"
                :key="tokenIndex"
                :style="{
                  color: token.color,
                }"
              >{{token.content}}</span></span></code>
        </pre>
      </div>
      <textarea
        v-model="text"
        aria-label="TypeScript code editor"
        :spellcheck="false"
        class="absolute caret-zinc-500 dark:caret-zinc-200 inset-0 field-sizing-content h-full w-full resize-none border-none bg-transparent font-mono text-lg font-normal overflow-clip whitespace-pre text-white/5 outline-hidden"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TokensResult } from "shiki";

const text = ref(`// Using 'typeof' to infer types
const person = { name: "Alice", age: 30 };
type PersonType = typeof person;  // { name: string; age: number }

// 'satisfies' to ensure a type matches but allows more specific types
type Animal = { name: string };
const dog = { name: "Buddy", breed: "Golden Retriever" } satisfies Animal;

// Generics with 'extends' and default values
function identity<T extends number | string = string>(arg: T): T {
  return arg;
}

let str = identity();  // Default type is string
let num = identity(42);  // T inferred as number

// 'extends' with interface and class
interface HasLength {
  length: number;
}

function logLength<T extends HasLength = string>(arg: T): void {
  console.log(arg.length);
}

logLength("Hello");    // OK: string has length (default is string)
logLength([1, 2, 3]);  // OK: array has length
// logLength(123);      // Error: number doesn't have length

// 'typeof' with functions
function add(x: number, y: number): number {
  return x + y;
}

type AddFunctionType = typeof add;  // (x: number, y: number) => number

// Generic interfaces with 'extends' and default types
interface Box<T extends object = { message: string }> {
  content: T;
}

let defaultBox: Box = { content: { message: "Hello" } };  // Uses default type
let customBox: Box<{ status: number }> = { content: { status: 200 } };

// Complex example with 'satisfies' and default generics
type Task = {
  title: string;
  description?: string;
  completed: boolean;
};

const myTask = {
  title: "Learn TypeScript",
  completed: false,
  priority: "High",
} satisfies Task;  // Allows priority but ensures Task structure

// Generic function with default type
function wrapInArray<T = string>(value: T): T[] {
  return [value];
}

const stringArray = wrapInArray();  // Default to string
const numberArray = wrapInArray(42);  // T inferred as number

/**
 * Combines two generic types into a tuple.
 * 
 * @template T - The first type.
 * @template U - The second type.
 * @param {T} first - The first value.
 * @param {U} second - The second value.
 * @returns {[T, U]} A tuple containing both values.
 */
function combine<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}`);
const tokens = ref<TokensResult | null>(null);
watch(
  [text],
  () => {
    getHighlighter().then((highlighter) => {
      tokens.value = highlighter.codeToTokens(text.value, {
        lang: "ts",
        theme: "catppuccin-mocha",
      });
    });
  },
  { immediate: true }
);
</script>
