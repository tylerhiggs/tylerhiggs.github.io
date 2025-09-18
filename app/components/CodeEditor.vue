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
        ref="txtarea"
        v-model="value"
        aria-label="TypeScript code editor"
        :spellcheck="false"
        class="absolute caret-zinc-500 dark:caret-zinc-200 inset-0 field-sizing-content h-full w-full resize-none border-none bg-transparent font-mono text-lg font-normal overflow-clip whitespace-pre text-white/5 outline-hidden"
        @keydown.meta.b.prevent="insertFormating('**', 'bold', '**')"
        @keydown.meta.i.prevent="insertFormating('*', 'italic', '*')"
        @keydown.ctrl.b.prevent="insertFormating('**', 'bold', '**')"
        @keydown.ctrl.i.prevent="insertFormating('*', 'italic', '*')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TokensResult } from "shiki";

const value = shallowRef(`# Typography and Components
## Introduction

Welcome! If you navigate to the [editor](/edit) (after logging in with Google) you can create pages like this one by using a mixture of markdown and extra components.

https://www.youtube.com/watch?v=Dzvs-GNx-ww

## Shortcuts and Commands
* :kbd{value="meta"} :kbd{value="shift"} :kbd{value="B"} toggles sidebar.
* :kbd{value="meta"} :kbd{value="K"} toggles search.
* :kbd{value="meta"} :kbd{value="E"} toggles preview.
  * :kbd{value="meta"} :kbd{value="shift"} :kbd{value="E"} toggles fullscreen preview.
* Editor shortcuts (while typing in editor):
  * :kbd{value="/"} opens command pallet, search for any markdown or component syntax without needing to memorize.
    * Also search for any icon (:icon{name="bug-ant"}) and special key binding (:kbd{value="meta"}).
    * Search "Upload Image" to download an image and have the markdown automatically generated to point to your freshly uploaded image!
  * :kbd{value="meta"} :kbd{value="B"} bold (also works for highlighted characters).
  * :kbd{value="meta"} :kbd{value="I"} italic (also works for highlighted characters).
  * :kbd{value="meta"} :kbd{value="V"} paste formatted text gets translated and pasted as markdown.

## Colors

For any \`color\` properties, here are your options:

| **Color**                      | **Description**                                             |
| ------------------------------ | ----------------------------------------------------------- |
| \`primary\`{color="primary"}     | Main brand color, used as the default color for components. |
| \`secondary\`{color="secondary"} | Secondary color to complement the primary color.            |
| \`success\`{color="success"}     | Used for success states.                                    |
| \`warning\`{color="warning"}     | Used for warning states.                                    |
| \`info\`{color="info"}           | Used for informational states.                              |
| \`neutral\`                      | Neutral color for backgrounds, text, etc.                   |

### \`a\` (link)
::tabs
  ::tabs-item{label="Preview" icon="eye"}
  [Nuxt documentation](https://nuxt.com)
  ::
  ::tabs-item{label="Code" icon="code-bracket"}
  \`\`\`mdc
  [Nuxt documentation](https://nuxt.com)
  \`\`\`
  ::
::`);
const txtarea = useTemplateRef("txtarea");
const tokens = ref<TokensResult | null>(null);
watch(
  [value],
  () => {
    getHighlighter().then((highlighter) => {
      tokens.value = highlighter.codeToTokens(value.value, {
        lang: "mdc",
        theme: "catppuccin-mocha",
      });
    });
  },
  { immediate: true }
);

//https://dev.to/shivams136/simple-markdown-insertion-in-the-text-using-pure-javascript-pl4
const insertFormating = (text: string, defaultTxt = "", text2 = "") => {
  if (!txtarea.value) return;
  const selectStart = txtarea.value.selectionStart;
  const selectEnd = txtarea.value.selectionEnd;
  const caretPos = txtarea.value.selectionStart;
  let mode = 0;
  let front = txtarea.value.value.substring(0, caretPos);
  let back = txtarea.value.value.substring(
    selectEnd,
    txtarea.value.value.length
  );
  let middle = txtarea.value.value.substring(caretPos, selectEnd);

  // Sets ending tag as opening tag if empty

  const textLen = text.length;
  const text2Len = text2.length;

  if (selectStart === selectEnd) {
    middle = defaultTxt;
    mode = 1;
  } else {
    if (front.slice(-textLen) === text && back.slice(0, text2Len) === text2) {
      front = front.slice(0, front.length - textLen);
      back = back.slice(text2Len);
      text = "";
      text2 = "";
      mode = 2;
    } else if (
      middle.slice(0, textLen) === text &&
      middle.slice(-text2Len) === text2
    ) {
      middle = middle.slice(textLen, middle.length - text2Len);
      text = "";
      text2 = "";
      mode = 3;
    }
  }
  txtarea.value.value = front + text + middle + text2 + back;
  if (selectStart !== selectEnd) {
    if (mode === 0) {
      txtarea.value.selectionStart = selectStart + textLen;
      txtarea.value.selectionEnd = selectEnd + textLen;
    } else if (mode === 2) {
      txtarea.value.selectionStart = selectStart - textLen;
      txtarea.value.selectionEnd = selectEnd - textLen;
    } else if (mode === 3) {
      txtarea.value.selectionStart = selectStart;
      txtarea.value.selectionEnd = selectEnd - textLen - text2Len;
    }
  } else {
    txtarea.value.selectionStart = selectStart + textLen;
    txtarea.value.selectionEnd = txtarea.value.selectionStart + middle.length;
  }
  txtarea.value.focus();
  value.value = txtarea.value.value;
};
</script>
