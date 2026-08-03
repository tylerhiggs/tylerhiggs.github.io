<template>
  <main class="grid grid-cols-12 relative min-h-screen">
    <PageNav
      gh-link="https://github.com/tylerhiggs/tylerhiggs.github.io/blob/main/app/pages/segmentation.vue"
    />

    <div
      class="col-span-12 px-12 py-24 md:col-start-3 md:col-span-8 lg:col-start-4 lg:col-span-6 relative z-10 **:[p]:text-lg"
    >
      <h1
        class="text-5xl font-bold mb-4 bg-gradient-to-r from-violet-700 to-blue-600 bg-clip-text text-transparent"
      >
        Running a State-of-the-Art Segmentation Model on One GPU
      </h1>
      <p class="text-zinc-500 dark:text-zinc-400">
        Final project for MIT 6.819/6.869, Advances in Computer Vision.
      </p>
      <div class="flex flex-wrap gap-3 mb-6">
        <a
          href="/Segmentation_Final_Project.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-4 py-2 bg-violet-700 hover:bg-violet-800 hover:scale-105 text-white rounded-full text-sm font-medium transition-colors"
        >
          <UIcon name="heroicons:document-text" size="16" />
          Read the Paper
        </a>
        <a
          href="https://github.com/tylerhiggs/Res18GSCNN"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 hover:scale-105 text-white rounded-full text-sm font-medium transition-colors"
        >
          <UIcon name="mdi:github" size="16" />
          Res18GSCNN
        </a>
        <a
          href="https://github.com/tylerhiggs/Res18GSCNNmodified"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 hover:scale-105 text-white rounded-full text-sm font-medium transition-colors"
        >
          <UIcon name="mdi:github" size="16" />
          Res18GSCNN (modified)
        </a>
      </div>
      <div class="flex flex-wrap gap-2 mt-4">
        <TechChip icon="logos:python" title="Python" />
        <TechChip icon="logos:pytorch-icon" title="PyTorch" />
        <TechChip icon="logos:nvidia" title="CUDA" />
        <TechChip icon="i-heroicons:squares-2x2" title="Semantic Segmentation" />
        <TechChip icon="i-heroicons:cpu-chip" title="CNNs" />
        <TechChip icon="i-heroicons:photo" title="Cityscapes" />
        <TechChip icon="i-heroicons:academic-cap" title="MIT 6.819" />
      </div>

      <p>
        Semantic segmentation asks a network to label every single pixel of an
        image — road, sidewalk, person, car, sky. It is the perception problem
        underneath self-driving cars and image generation, and in 2021 the best
        published results came from networks that only a lab with a GPU cluster
        could actually train.
      </p>
      <p>
        I set out to do two things: make the leading architecture trainable on
        one GPU so that people without a cluster could use it, and test an idea I
        had about the way its two halves talk to each other.
      </p>

      <figure class="my-8">
        <NuxtPicture
          class="w-full rounded-lg shadow-lg bg-white"
          src="/segmentation-cityscapes.png"
          alt="A semantic segmentation from the Cityscapes dataset, where pedestrians, cyclists, cars, road, sidewalk and vegetation are each filled in with a different color"
          sizes="sm:600px md:800px lg:1400px"
          format="webp"
          placeholder
        />
        <figcaption
          class="text-sm text-center text-zinc-500 dark:text-zinc-400 mt-2"
        >
          An example segmentation from the Cityscapes dataset. Every pixel is
          assigned one of 19 classes.
        </figcaption>
      </figure>

      <section ref="problem">
        <h2 id="problem" class="text-3xl font-semibold mt-12 mb-4">
          The state of the art needed 8 GPUs
        </h2>
        <p>
          The network I wanted to build on was the
          <strong>Gated Shape CNN (GSCNN)</strong> by Takikawa et al., published
          at ICCV 2019. Its insight is that shape is a different kind of
          information from color and texture, and that cramming both into one
          network makes each worse. So GSCNN splits into two streams: a
          <em>regular stream</em> that encodes color and texture semantics, and a
          <em>shape stream</em> that encodes edges and boundaries. Gates let the
          regular stream feed what it knows into the shape stream, and a fusion
          module recombines them into the final prediction.
        </p>
        <p>
          The catch was the backbone. GSCNN's regular stream is a
          <strong>WideResNet-38</strong>, and the authors trained it on
          <strong>8 GPUs</strong>. Their repository carries a warning that the
          code will probably not run on a single GPU. I tried anyway, and it
          didn't. Looking through the issues on the repository, I found other
          people asking the same thing: was there a version of this that would
          run on one machine?
        </p>
        <p>
          There wasn't. As far as I could tell, no publicly accessible
          implementation swapped in a lighter backbone. That is a real barrier —
          it means the only people who can experiment with a promising
          architecture are the ones who already have a cluster.
        </p>
      </section>

      <section ref="approach">
        <h2 id="approach" class="text-3xl font-semibold mt-12 mb-4">
          Rebuilding GSCNN around ResNet-18
        </h2>
        <p>
          So I reimplemented GSCNN with a <strong>ResNet-18</strong> regular
          stream and published it. ResNet-18 has four residual blocks, and those
          became the structure of the regular stream. The input to its first
          residual block is also routed into the first residual layer of the
          shape stream, after a <code>1x1</code> convolution that squeezes it
          down to a single channel.
        </p>
        <p>
          The shape stream keeps the original three-residual-block structure.
          Between its blocks — and after the final one — sit the gates, each
          combining the previous shape-stream layer with a layer of the regular
          stream (again passed through a <code>1x1</code> convolution down to one
          channel). The first gate takes the shape stream's first block and the
          regular stream's second; the second gate pairs the shape stream's
          second block with the regular stream's third; the third gate pairs the
          shape stream's third block with the regular stream's fourth.
        </p>

        <figure class="my-8">
          <a
            href="/segmentation-architecture.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <NuxtPicture
              class="w-full rounded-lg shadow-lg bg-white"
              src="/segmentation-architecture.png"
              alt="Architecture diagram of the ResNet-18 GSCNN, showing the regular stream's convolutional blocks above, the shape stream with its three gates below, and 1x1 convolutions connecting the regular stream down into each gate"
              sizes="sm:600px md:800px lg:1400px"
              format="webp"
              placeholder
            />
          </a>
          <figcaption
            class="text-sm text-center text-zinc-500 dark:text-zinc-400 mt-2"
          >
            The regular and shape streams of my ResNet-18 GSCNN. Each block is a
            convolutional layer labeled with its kernel size and channel count.
            Click to view full size.
          </figcaption>
        </figure>

        <p>
          The fusion module is taken directly from the original GSCNN. It runs
          the combined streams through ASPP and produces both the segmentation
          loss and the duality task loss, while the shape stream carries its own
          edge loss.
        </p>

        <figure class="my-8">
          <NuxtPicture
            class="w-full rounded-lg shadow-lg bg-white"
            src="/segmentation-fusion.png"
            alt="Diagram of the fusion module, where the regular stream output and the shape stream output meet at an ASPP block that produces the segmentation loss and duality task loss"
            sizes="sm:400px md:500px lg:600px"
            format="webp"
            placeholder
          />
          <figcaption
            class="text-sm text-center text-zinc-500 dark:text-zinc-400 mt-2"
          >
            The fusion module, taken directly from the original GSCNN.
          </figcaption>
        </figure>
      </section>

      <section ref="experiment">
        <h2 id="experiment" class="text-3xl font-semibold mt-12 mb-4">
          Making the two streams talk both ways
        </h2>
        <p>
          Here is the part I was actually curious about. In GSCNN, information
          only flows <em>one way</em>: the shape stream takes layers from the
          regular stream, because knowing where the objects are helps you find
          their boundaries. But the reverse ought to be true too — knowing where
          the semantic edges are should help you decide what the regions between
          them contain. So why not connect the shape stream back into the regular
          stream?
        </p>
        <p>
          To do it, I took the output of the third residual layer of the regular
          stream through a <code>1x1</code> convolution producing 128 channels
          (<code>128 x h x w</code>), and concatenated it with a matching
          <code>128 x h x w</code> tensor from the shape stream along the channel
          dimension. That yields the <code>256 x h x w</code> input the fourth
          residual block already expects, so nothing downstream had to change.
          That same output is also where I hooked into the shape stream's second
          gate.
        </p>
        <p>
          The shape stream gained a duplicate second residual block, so that two
          identical blocks sit between the first and second gates. The first of
          those two sends its output up to the regular stream, after a
          convolutional layer brings it to the <code>128 x h x w</code> shape
          needed for the concatenation.
        </p>

        <figure class="my-8">
          <a
            href="/segmentation-proposed.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <NuxtPicture
              class="w-full rounded-lg shadow-lg bg-white"
              src="/segmentation-proposed.png"
              alt="Architecture diagram of the modified network, identical to the ResNet-18 GSCNN except for an added path from the shape stream up through a 1x1 convolution to 128 channels and a concatenation into the regular stream's fourth residual block"
              sizes="sm:600px md:800px lg:1400px"
              format="webp"
              placeholder
            />
          </a>
          <figcaption
            class="text-sm text-center text-zinc-500 dark:text-zinc-400 mt-2"
          >
            The modified network. Note the added <code>Conv 1x1, 128</code> and
            <code>Concat, 256</code> in the regular stream, and the duplicated
            residual block in the shape stream. Click to view full size.
          </figcaption>
        </figure>
      </section>

      <section ref="results">
        <h2 id="results" class="text-3xl font-semibold mt-12 mb-4">Results</h2>
        <p>
          I trained both networks for 20 epochs on the Cityscapes
          <code>leftImg8bit</code> dataset, which labels 19 classes across urban
          street scenes, and used it for validation and testing as well. Every
          hyperparameter and input transform was kept identical to the original
          GSCNN so that the comparison stayed honest.
        </p>
        <p>
          The <strong>ResNet-18 GSCNN</strong> reached its best accuracy of
          <strong>74.2%</strong> at epoch 18. The original GSCNN reports 82.9%,
          but it got there with 175 epochs on 8 GPUs. My network gives up
          accuracy, and in exchange it runs on hardware people actually have.
        </p>
        <p>
          The <strong>bidirectional variant</strong> reached
          <strong>48.8%</strong>. There is not much to say beyond that: adding
          the connection made things substantially worse, on both mask quality
          (mIoU) and boundary quality (F-score). The original topology was
          clearly well thought out and well tested, and altering it hurt.
        </p>
      </section>

      <section ref="takeaways">
        <h2 id="takeaways" class="text-3xl font-semibold mt-12 mb-4">
          What I took away
        </h2>
        <p>
          My hypothesis was wrong, and I think that is worth writing down plainly
          rather than burying. A negative result is still a result — the
          intuition that "if A helps B, then B should help A" is appealing and,
          at least for this connection, it does not hold.
        </p>
        <p>
          I want to be careful about how far I push that conclusion, though. My
          experiment was small. I tested <em>one</em> kind of connection, in
          <em>one</em> place, <em>once</em>. There may well be a version of this
          idea — a different style of connection, a different number of them, or
          different locations — that does improve on GSCNN. What I can say is
          that my experiments give no evidence that this is a meaningful path to
          go down, and that is useful information for the next person
          considering it.
        </p>
        <p>
          The durable output was the other half. There is now a publicly
          available ResNet-18 version of GSCNN, which is exactly what people on
          the internet had been asking for, and it trains on a single GPU. My
          hope is that lowering the hardware bar means more people get to
          experiment with the architecture — possibly to the point of beating the
          original.
        </p>
        <p>
          Thanks are owed to Towaki Takikawa, David Acuna, Varun Jampani, and
          Sanja Fidler for publishing their GSCNN implementation, and to the
          staff of MIT 6.819/6.869 for teaching me the computer vision
          fundamentals this project rests on.
        </p>
      </section>
    </div>

    <div
      class="lg:flex lg:flex-col sticky top-0 hidden max-h-screen md:col-span-2 pointer-events-none"
    >
      <PageOutline :items="outlineItems" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { useElementVisibility } from "@vueuse/core";
import type { Item } from "~/types";

const problemSection = useTemplateRef("problem");
const approachSection = useTemplateRef("approach");
const experimentSection = useTemplateRef("experiment");
const resultsSection = useTemplateRef("results");
const takeawaysSection = useTemplateRef("takeaways");

const problemSectionVisible = useElementVisibility(problemSection);
const approachSectionVisible = useElementVisibility(approachSection);
const experimentSectionVisible = useElementVisibility(experimentSection);
const resultsSectionVisible = useElementVisibility(resultsSection);
const takeawaysSectionVisible = useElementVisibility(takeawaysSection);

const outlineItems = computed(
  () =>
    [
      {
        id: "problem",
        label: "The state of the art needed 8 GPUs",
        items: [],
        isVisible: problemSectionVisible.value,
      },
      {
        id: "approach",
        label: "Rebuilding GSCNN around ResNet-18",
        items: [],
        isVisible: approachSectionVisible.value,
      },
      {
        id: "experiment",
        label: "Making the two streams talk both ways",
        items: [],
        isVisible: experimentSectionVisible.value,
      },
      {
        id: "results",
        label: "Results",
        items: [],
        isVisible: resultsSectionVisible.value,
      },
      {
        id: "takeaways",
        label: "What I took away",
        items: [],
        isVisible: takeawaysSectionVisible.value,
      },
    ] as Item[]
);

const title = "Single-GPU Gated Shape CNN - Tyler Higgs";
const description =
  "An MIT computer vision final project: reimplementing the Gated Shape CNN with a ResNet-18 backbone so it trains on a single GPU, and testing whether connecting the shape stream back into the regular stream improves semantic segmentation.";

useSeoMeta({ title, description });
useHead({ title });
</script>
