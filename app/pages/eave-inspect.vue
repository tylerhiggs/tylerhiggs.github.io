<template>
  <main class="grid grid-cols-12 relative min-h-screen">
    <PageNav />
    <div
      class="col-span-12 px-12 py-24 md:col-start-3 md:col-span-8 lg:col-start-4 lg:col-span-6 relative z-10 **:[p]:text-lg"
    >
      <h1
        class="text-5xl font-bold mb-4 bg-gradient-to-r from-violet-700 to-blue-600 bg-clip-text text-transparent"
      >
        Eave
      </h1>
      <p class="text-2xl! text-zinc-500 dark:text-zinc-400 mb-6">
        Software for Home Inspectors
      </p>
      <div class="flex flex-wrap gap-3 mb-6">
        <a
          href="https://eaveinspect.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-4 py-2 bg-violet-700 hover:bg-violet-800 hover:scale-105 text-white rounded-full text-sm font-medium transition-colors"
        >
          <UIcon name="heroicons:play" size="16" />
          Live Demo
        </a>
        <a
          href="https://eaveinspect.com/help"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 hover:scale-105 text-white rounded-full text-sm font-medium transition-colors"
        >
          <UIcon name="heroicons:book-open" size="16" />
          Help Docs
        </a>
      </div>
      <div class="flex flex-wrap gap-2 mt-4 mb-6">
        <TechChip icon="logos:nuxt-icon" title="Nuxt" />
        <TechChip icon="logos:vue" title="Vue" />
        <TechChip icon="logos:oauth" title="OAuth" />
        <TechChip icon="file-icons:sqlite" title="SQLite" />
        <TechChip icon="simple-icons:drizzle" title="Drizzle ORM" />
        <TechChip icon="logos:tailwindcss-icon" title="Tailwind CSS" />
        <TechChip icon="logos:typescript-icon" title="TypeScript" />
        <TechChip icon="logos:swift" title="Swift/iOS" />
        <TechChip icon="logos:cloudflare-icon" title="Cloudflare" />
        <TechChip icon="logos:stripe" title="Stripe Connect" />
        <TechChip icon="logos:anthropic-icon" title="Claude API" />
        <TechChip icon="i-heroicons:magnifying-glass" title="SEO" />
        <TechChip icon="i-heroicons:server-stack" title="SSR" />
        <TechChip icon="i-heroicons:device-phone-mobile" title="Responsive" />
        <TechChip icon="i-lucide:accessibility" title="Accessibility" />
        <TechChip icon="simple-icons:githubactions" title="CI/CD" />
      </div>
      <p>
        Eave is a solo SaaS startup I built end-to-end for home inspectors — the
        people who walk a house room by room before it changes hands and write
        up everything they find. It replaces a stack of disconnected tools (a
        report template in Word, a scheduling link, a separate e-signature
        service, a spreadsheet of clients) with one product that covers the
        whole job: building the report on-site, flagging issues automatically,
        collecting a signature, and getting paid.
      </p>
      <p>
        It's a full-stack project in the truest sense — a Nuxt/Vue web app, a
        native Swift iOS app, a SQLite database behind Drizzle ORM, two separate
        Stripe integrations (my subscriptions and my customers' client
        payments), an AI import pipeline, and deployment on Cloudflare, all
        designed and shipped by me alone. The sections below walk through the
        major feature areas and the engineering decisions behind each one.
      </p>
      <div class="flex items-center">
        <NuxtPicture
          class="w-full rounded-lg my-4"
          src="/eave-dashboard.png"
          alt="Screenshot of the Eave dashboard"
          sizes="sm:600px md:800px lg:1400px"
          format="webp"
          placeholder
        />
      </div>

      <section ref="templates">
        <h2 id="templates" class="text-3xl font-semibold mt-12 mb-4">
          Custom Templates &amp; On-Site Data Entry
        </h2>
        <p>
          Every inspection starts from a template — either one of the curated
          samples (Standard Home Inspection, Radon Testing, Mold Assessment,
          Sewer Scope, and more) or a fully custom one built from scratch.
          Templates are made of sections, subsections, and fields, and each
          field can be one of eight types: text, number, yes/no, dropdown,
          multi-select, rating, date, or photo/video. Inspectors can
          drag-reorder everything, set default values, and even define
          conditional visibility so a field only shows up when a prior answer
          warrants it.
        </p>
        <div class="flex items-center">
          <NuxtPicture
            class="w-full rounded-lg my-4"
            src="/templates.png"
            alt="Screenshot of the Eave template library"
            sizes="sm:600px md:800px lg:1400px"
            format="webp"
            placeholder
          />
        </div>
        <p>
          The hard part wasn't the builder UI, it was the schema. Eight field
          types each need different configuration (a number field needs a unit
          and min/max, a multi-select needs min/max selections, a photo field
          needs a max count) without turning the template model into a pile of
          nullable columns or forcing a new database migration every time I want
          to add a field type. I settled on a typed, discriminated config object
          per field, validated with Zod, stored as JSON — so the schema evolves
          in code, not in the database, and TypeScript catches mismatched field
          configs at compile time.
        </p>
        <p>
          On-site, inspectors fill out fields directly on their phone or laptop
          with autosave firing about 1.5 seconds after the last keystroke (with
          Cmd+S available to force it), and they can even tweak a field on the
          fly mid-inspection — attach a description, require it, rename it —
          without leaving the report to go edit the template separately.
        </p>
        <div class="flex items-center">
          <NuxtPicture
            class="w-full rounded-lg my-4"
            src="/edit-template.png"
            alt="Screenshot of the Eave template editor"
            sizes="sm:600px md:800px lg:1400px"
            format="webp"
            placeholder
          />
        </div>
        <iframe
          src="https://www.youtube.com/embed/-aN0XaELtss"
          title="Editing an Eave template"
          class="my-4 aspect-video w-full rounded-lg border border-neutral-200 dark:border-neutral-700"
          allowfullscreen
        ></iframe>
        <a
          href="https://eaveinspect.com/help/templates/editing-a-template"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-600 hover:underline"
          >Full guide: Editing a template →</a
        >
      </section>

      <section ref="templateImport">
        <h2 id="template-import" class="text-3xl font-semibold mt-12 mb-4">
          AI Template Import (Claude + Structured Outputs)
        </h2>
        <p>
          The biggest thing standing between an inspector and switching software
          is the template they've spent years refining in Spectora or HomeGauge.
          So Eave imports it: drop in an export — CSV, Excel, PDF, plain text,
          or HTML — and it comes back as a fully editable Eave template with the
          original sections, subsections, and fields intact.
        </p>
        <div class="flex items-center">
          <NuxtPicture
            class="w-full rounded-lg my-4"
            src="/template-import-modal.png"
            alt="Screenshot of the Eave template import modal"
            sizes="sm:600px md:800px lg:1400px"
            format="webp"
            placeholder
          />
        </div>
        <p>
          I split the pipeline into a
          <strong>deterministic ingest layer</strong> and a
          <strong>probabilistic transform layer</strong>. Ingest only cares
          about the container format — spreadsheets through <code>xlsx</code>,
          PDFs through <code>unpdf</code> — and produces raw text with a hard
          cap on size. Interpretation is Claude's job: the extracted text goes
          out with a source-specific system prompt (Spectora and HomeGauge each
          have their own comment taxonomy worth explaining to the model) and a
          Zod schema as a structured-output contract, so what comes back is
          validated into the same typed template schema the hand-built editor
          produces. Anything the model gets wrong is just a normal template the
          inspector can edit — the import is a head start, not a black box.
        </p>
        <p>
          The interesting constraint was the runtime. Cloudflare Workers cancel
          background work shortly after a response is sent, and a large template
          can take minutes to transform — so this can't be a fire-and-forget job
          behind a polling endpoint. Instead the transform runs inside a
          held-open SSE request that streams progress back to the browser while
          it works, and the extracted text is persisted before the model is ever
          called, so a dropped connection or a failed transform can be retried
          with one click and no re-upload.
        </p>
        <a
          href="https://eaveinspect.com/help/templates/importing-a-template"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-600 hover:underline"
          >Full guide: Importing a template →</a
        >
      </section>

      <section ref="warningsEngine">
        <h2 id="warnings-engine" class="text-3xl font-semibold mt-12 mb-4">
          Automated Warnings &amp; Home-Care Rules Engine
        </h2>
        <p>
          As an inspector answers fields, Eave evaluates a set of rules attached
          to the template and automatically generates warnings (grouped by
          severity: Safety, Health, Structural, Electrical, Fire, Maintenance,
          Info) and home-care tips (grouped by cadence: Monthly, Quarterly,
          Bi-Annual, Annual, Seasonal, As-Needed) without the inspector having
          to write any of that language themselves. They can still edit
          severity, title, message, estimated cost, or timeline on any triggered
          item, hide ones that don't apply, or add fully custom ones.
        </p>
        <div class="flex items-center">
          <NuxtPicture
            class="w-full rounded-lg my-4"
            src="/warnings-page.png"
            alt="Screenshot of the Eave warnings page"
            sizes="sm:600px md:800px lg:1400px"
            format="webp"
            placeholder
          />
        </div>
        <p>
          The interesting problem here is what happens when a rule changes after
          an inspector has already hand-edited a warning it triggered — say I
          fix a typo in a rule's default message, or the inspector changes their
          answer to the underlying field. Naively re-running the rule would
          silently overwrite their edit; naively skipping re-evaluation would
          leave stale data. I built what I call
          <strong>stale overrides</strong>: once an inspector manually edits a
          triggered item, that edit is tracked separately from the rule's output
          and takes precedence, but the system still flags when the underlying
          rule or answer has since diverged, so nothing gets lost silently. The
          whole thing locks at publish time so a report can't keep mutating
          after it's been sent to a client.
        </p>
        <div class="flex items-center">
          <NuxtPicture
            class="w-full rounded-lg my-4"
            src="/home-care-tips.png"
            alt="Screenshot of the Eave home-care tips page"
            sizes="sm:600px md:800px lg:1400px"
            format="webp"
            placeholder
          />
        </div>
        <iframe
          src="https://www.youtube.com/embed/3DcWce7FvF8"
          title="Warnings and safety notices in Eave"
          class="my-4 aspect-video w-full rounded-lg border border-neutral-200 dark:border-neutral-700"
          allowfullscreen
        ></iframe>
        <a
          href="https://eaveinspect.com/help/inspections/warnings"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-600 hover:underline"
          >Full guide: Warnings &amp; safety notices →</a
        >
      </section>

      <section ref="publishing">
        <h2 id="publishing" class="text-3xl font-semibold mt-12 mb-4">
          Publishing, E-Signatures &amp; Version History
        </h2>
        <p>
          Once an inspection is complete, the inspector previews the report as a
          client would see it, downloads a PDF, and publishes it — which
          generates a stable, shareable link. Clients can be routed through a
          pre-inspection agreement that requires a digital signature before they
          can view the full report, and the report itself locks until that
          signature is captured. Inspectors can unpublish and republish later
          (clients get notified of updates), and every publish is kept in a
          version history.
        </p>
        <div class="flex items-center">
          <NuxtPicture
            class="w-full rounded-lg my-4"
            src="/preview-report.png"
            alt="Screenshot of an Eave report preview"
            sizes="sm:600px md:800px lg:1400px"
            format="webp"
            placeholder
          />
        </div>
        <p>
          Signature capture supports both drawing (mouse, trackpad, or touch)
          and uploading an image, which gets resized and compressed client-side
          before it's stored — no point uploading a multi-megabyte photo of a
          signature. Publishing itself is gated behind a profile-completeness
          check (license number, business info, and a signature all need to be
          on file). Whether a published report locks is the inspector's call,
          set per inspection at creation time: auditable reports freeze on
          publish for a clean paper trail, while the rest stay editable and
          simply mark their generated PDF stale, so the next download
          regenerates it instead of serving something that no longer matches the
          report.
        </p>
        <div class="flex items-center">
          <NuxtPicture
            class="w-full rounded-lg my-4"
            src="/user-signature.png"
            alt="Screenshot of the Eave signature settings page"
            sizes="sm:600px md:800px lg:1400px"
            format="webp"
            placeholder
          />
        </div>
        <iframe
          src="https://www.youtube.com/embed/iTKY81xmHSc"
          title="Publishing and sharing reports in Eave"
          class="my-4 aspect-video w-full rounded-lg border border-neutral-200 dark:border-neutral-700"
          allowfullscreen
        ></iframe>
        <a
          href="https://eaveinspect.com/help/inspections/publishing-reports"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-600 hover:underline"
          >Full guide: Publishing &amp; sharing reports →</a
        >
      </section>

      <section ref="agreements">
        <h2 id="agreements" class="text-3xl font-semibold mt-12 mb-4">
          Pre-Inspection Agreements &amp; E-Signing
        </h2>
        <p>
          Inspectors are supposed to have a signed agreement before they ever
          walk the property, and most of them chase it over email. In Eave they
          write the agreement once, attach it to an inspection (at creation, or
          later from the deliver page), and every client with an email address
          automatically gets a signing link. The client types their legal name,
          checks an "I agree" box, signs, and a signed PDF is stored on the
          inspection.
        </p>
        <div class="flex items-center">
          <NuxtPicture
            class="w-full rounded-lg my-4"
            src="/agreement-editor.png"
            alt="Screenshot of the Eave agreement editor"
            sizes="sm:600px md:800px lg:1400px"
            format="webp"
            placeholder
          />
        </div>
        <p>
          The design decision I care about here is that agreements are
          <strong>snapshotted, not referenced</strong>. An agreement template is
          copied onto the inspection at the moment it's attached, so later edits
          to the template can never retroactively change the document a client
          already signed — the same reason you don't render a legal document
          from mutable state. The signed copy is what the inspector can point to
          a year later if a claim comes up.
        </p>
        <div class="flex items-center">
          <NuxtPicture
            class="w-full rounded-lg my-4"
            src="/agreement-client-sign.png"
            alt="Screenshot of a client signing an Eave agreement"
            sizes="sm:600px md:800px lg:1400px"
            format="webp"
            placeholder
          />
        </div>
        <p>
          An unsigned agreement also locks the published report: anyone opening
          the report link gets a "review &amp; sign" screen instead of the
          findings, and it unlocks the instant someone signs. Since payment can
          gate the report too, the two locks are resolved as an explicit,
          ordered chain — sign, then pay, then read — so a client never hits two
          walls in a row without knowing which one they're on.
        </p>
        <a
          href="https://eaveinspect.com/help/agreements/overview"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-600 hover:underline"
          >Full guide: Pre-inspection agreements →</a
        >
      </section>

      <section ref="payments">
        <h2 id="payments" class="text-3xl font-semibold mt-12 mb-4">
          Client Payments (Stripe Connect)
        </h2>
        <p>
          Inspectors collect their fee through Eave: the client gets a pay link
          (manually, or emailed automatically on creation or publish, with
          optional reminders) and pays by card, Apple Pay, Google Pay, or ACH
          bank transfer. The inspection marks itself paid, the inspector is
          notified, and the client gets a receipt. Inspectors can also require
          payment before the report unlocks.
        </p>
        <div class="flex items-center">
          <NuxtPicture
            class="w-full rounded-lg my-4"
            src="/payments-client-page.png"
            alt="Screenshot of the Eave client payment page"
            sizes="sm:600px md:800px lg:1400px"
            format="webp"
            placeholder
          />
        </div>
        <p>
          This is built on
          <strong>Stripe Connect Express with direct charges</strong> — each
          inspector onboards their own connected account and the charge is
          created on it, so the money never touches a platform balance and
          Stripe handles KYC, payouts, refunds, and disputes. That's a
          deliberate positioning choice as much as an architectural one:
          competitors take 3–4% of every inspection fee, while Eave's platform
          fee is wired up and set to zero. It's also a second, completely
          separate Stripe integration from the SaaS subscription — its own
          webhook endpoint and signing secret — and the one security invariant
          that matters is that Checkout metadata is attacker-controllable, so
          every payment event verifies the connected account that sent it
          actually owns the inspection it names.
        </p>
        <div class="flex items-center">
          <NuxtPicture
            class="w-full rounded-lg my-4"
            src="/payments-settings.png"
            alt="Screenshot of the Eave payment settings page"
            sizes="sm:600px md:800px lg:1400px"
            format="webp"
            placeholder
          />
        </div>
        <p>
          ACH made this a real state machine rather than a boolean. A bank
          transfer completes checkout without the money existing yet, so a
          payment moves through processing → paid or failed over several days,
          asynchronously, on webhooks that can arrive out of order, duplicated,
          or race the browser redirect. I kept a single timestamp as the source
          of truth for "actually paid", made Stripe events refuse to overwrite a
          payment the inspector recorded by hand, scoped idempotency to the
          Checkout Session so a re-collection after a refund still works, and
          pulled all of it into pure functions with unit tests — which matters
          more than usual on Cloudflare D1, where there are no interactive
          transactions to hide behind. The report gate deliberately
          <strong>fails open</strong>: if the inspector's account is restricted
          or the fee is zero, the report unlocks rather than trapping a client
          behind a payment they can't make.
        </p>
        <a
          href="https://eaveinspect.com/help/payments/overview"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-600 hover:underline"
          >Full guide: Payments overview →</a
        >
      </section>

      <section ref="scheduling">
        <h2 id="scheduling" class="text-3xl font-semibold mt-12 mb-4">
          Built-in Client Scheduling
        </h2>
        <p>
          Rather than sending clients to a third-party Calendly-style tool, Eave
          has its own public booking page — no login required. Clients pick a
          day from a calendar that highlights open slots, pick a time grouped
          into Morning/Afternoon, and enter their contact details. Inspectors
          configure their own working hours per weekday, inspection duration,
          buffer time between jobs, and slot granularity, and org admins can set
          org-wide defaults that individual members inherit until they customize
          their own.
        </p>
        <div class="flex items-center">
          <NuxtPicture
            class="w-full rounded-lg my-4"
            src="/client-pick-date.png"
            alt="Screenshot of the Eave client booking calendar"
            sizes="sm:600px md:800px lg:1400px"
            format="webp"
            placeholder
          />
        </div>
        <p>
          I deliberately modeled this as a <strong>request → confirm</strong>
          flow rather than instant-booking: a client submitting a time doesn't
          touch the inspector's calendar until the inspector explicitly confirms
          it. That avoids a whole class of double-booking bugs you'd otherwise
          have to solve with locking, since nothing is actually committed until
          a human approves it — but it still needs real-time conflict protection
          so two clients can't both be shown, and both request, the same slot
          before either is confirmed.
        </p>
        <div class="flex items-center">
          <NuxtPicture
            class="w-full rounded-lg my-4"
            src="/client-schedule-confirmed.png"
            alt="Screenshot of a confirmed Eave client booking"
            sizes="sm:600px md:800px lg:1400px"
            format="webp"
            placeholder
          />
        </div>
        <iframe
          src="https://www.youtube.com/embed/_BfIx0tdoe0"
          title="Client booking experience in Eave"
          class="my-4 aspect-video w-full rounded-lg border border-neutral-200 dark:border-neutral-700"
          allowfullscreen
        ></iframe>
        <a
          href="https://eaveinspect.com/help/scheduling/overview"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-600 hover:underline"
          >Full guide: Scheduling overview →</a
        >
      </section>

      <section ref="repairRequests">
        <h2 id="repair-requests" class="text-3xl font-semibold mt-12 mb-4">
          Repair Requests
        </h2>
        <p>
          This is a feature unique to Eave that came directly from talking to
          inspectors and buyer's agents: after a report is published, a buyer's
          agent (or anyone with the report link) can build a free "repair
          request" — the ask list sent to a seller — directly from the
          inspector's findings, instead of re-typing everything into a separate
          Word doc. They check off findings, choose a request type per item
          (Repair, Replace, Credit, Further evaluation, Other), add credit
          amounts or notes, and include custom items not in the report at all.
        </p>
        <div class="flex items-center">
          <NuxtPicture
            class="w-full rounded-lg my-4"
            src="/repair-requests-editor.png"
            alt="Screenshot of the Eave repair request editor"
            sizes="sm:600px md:800px lg:1400px"
            format="webp"
            placeholder
          />
        </div>
        <p>
          The builder reads live off the published report, which creates a
          reconciliation problem: what happens when a finding the buyer already
          referenced gets edited or removed from the report after the fact?
          Deleting the buyer's text outright would be destructive and confusing.
          Instead, a removed finding is flagged as "no longer in the report" in
          the repair request UI while the buyer's existing wording is preserved
          — the two documents can drift without either one silently corrupting
          the other.
        </p>
        <div class="flex items-center">
          <NuxtPicture
            class="w-full rounded-lg my-4"
            src="/view-repair-request.png"
            alt="Screenshot of a finished Eave repair request"
            sizes="sm:600px md:800px lg:1400px"
            format="webp"
            placeholder
          />
        </div>
        <iframe
          src="https://www.youtube.com/embed/GvUUQ25JJU8"
          title="Building a repair request in Eave"
          class="my-4 aspect-video w-full rounded-lg border border-neutral-200 dark:border-neutral-700"
          allowfullscreen
        ></iframe>
        <a
          href="https://eaveinspect.com/help/repair-requests/building-a-repair-request"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-600 hover:underline"
          >Full guide: Building a repair request →</a
        >
      </section>

      <section ref="mobileIos">
        <h2 id="mobile-ios" class="text-3xl font-semibold mt-12 mb-4">
          Mobile Web &amp; Native iOS App (Swift)
        </h2>
        <p>
          Inspectors spend most of their working hours walking through houses,
          not sitting at a desk, so the mobile experience isn't an afterthought.
          The mobile web app works fully in the browser — camera capture with
          automatic photo resizing and HEIC-to-JPEG conversion, a section
          navigator built for one-thumb use, and the same aggressive autosave as
          desktop. On top of that, I built a native iOS app in Swift for field
          use, with things a web app can't do as well, like one-tap turn-by-turn
          directions to the property via Maps.
        </p>
        <div class="flex items-center">
          <NuxtPicture
            class="w-full rounded-lg my-4"
            src="/eave-mobile-add-inspection.png"
            alt="Screenshot of adding an inspection on Eave mobile web"
            sizes="sm:600px md:800px lg:1400px"
            format="webp"
            placeholder
          />
        </div>
        <p>
          Both clients talk to the same backend and data model, which meant
          designing the API and photo pipeline around the actual conditions
          inspectors work in — spotty cell service in basements and crawl spaces
          — rather than assuming a fast, reliable connection. Compressing and
          converting media client-side before upload, and making autosave
          resilient to dropped connections, mattered more here than almost
          anywhere else in the product. Template building stays web-only by
          design; the iOS app is purpose-built for fast data capture in the
          field, not administration.
        </p>
        <div class="flex items-center">
          <NuxtPicture
            class="w-full rounded-lg my-4"
            src="/ios-fields.png"
            alt="Screenshot of the Eave iOS app filling out fields"
            sizes="sm:600px md:800px lg:1400px"
            format="webp"
            placeholder
          />
        </div>
        <iframe
          src="https://www.youtube.com/embed/bJyrwEpQuLw"
          title="Filling out an inspection on the Eave iOS app"
          class="my-4 aspect-video w-full rounded-lg border border-neutral-200 dark:border-neutral-700"
          allowfullscreen
        ></iframe>
        <a
          href="https://eaveinspect.com/help/ios-app/overview"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-600 hover:underline"
          >Full guide: Using Eave on iOS →</a
        >
      </section>

      <section ref="organizations">
        <h2 id="organizations" class="text-3xl font-semibold mt-12 mb-4">
          Multi-User Organizations
        </h2>
        <p>
          Many inspectors work as part of a small business rather than solo, so
          Eave supports organizations: create one, invite teammates by email —
          even people who don't have an Eave account yet, via an invite link
          that activates on signup — and everyone in the org automatically
          shares templates, inspections, and clients. There's no manual sharing
          toggle per object; if you're in the org, you see the org's work.
        </p>
        <div class="flex items-center">
          <NuxtPicture
            class="w-full rounded-lg my-4"
            src="/org-templates.png"
            alt="Screenshot of shared templates within an Eave organization"
            sizes="sm:600px md:800px lg:1400px"
            format="webp"
            placeholder
          />
        </div>
        <p>
          That "automatic sharing" model was a deliberate simplification. A
          per-object ACL system would be more flexible, but for a small
          inspection business — usually a handful of inspectors covering for
          each other — it's also more complexity than the problem calls for.
          Org-level defaults (a default template, a default fee) let an admin
          standardize how the whole team works without policing every new
          inspection individually.
        </p>
        <div class="flex items-center">
          <NuxtPicture
            class="w-full rounded-lg my-4"
            src="/invitations.png"
            alt="Screenshot of organization invitations in Eave"
            sizes="sm:600px md:800px lg:1400px"
            format="webp"
            placeholder
          />
        </div>
        <a
          href="https://eaveinspect.com/help/organization/sharing-templates-reports"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-600 hover:underline"
          >Full guide: Sharing templates &amp; reports →</a
        >
      </section>

      <section ref="billing">
        <h2 id="billing" class="text-3xl font-semibold mt-12 mb-4">
          Stripe-Powered Billing
        </h2>
        <p>
          The free tier lets an inspector run up to 5 inspections with no card
          required and no time limit — enough to genuinely try the product on
          real jobs, with every feature turned on, before paying. Eave Inspect
          Pro ($10/month, price locked for the life of the account) removes the
          cap. Billing is per-seat through Stripe — one subscription per user
          rather than per organization — with Stripe's customer portal handling
          self-serve plan management.
        </p>
        <div class="flex items-center">
          <NuxtPicture
            class="w-full rounded-lg my-4"
            src="/pro-billing.png"
            alt="Screenshot of the Eave Pro billing page"
            sizes="sm:600px md:800px lg:1400px"
            format="webp"
            placeholder
          />
        </div>
        <p>
          Per-seat rather than per-org billing keeps the pricing model simple to
          reason about for both sides — an org isn't blocked from adding a
          teammate by a shared seat pool, and I don't have to reconcile who
          "owns" the subscription when org membership changes. I also moved
          deliberately away from a hard paywall: rather than middleware guarding
          every route and a subscription check scattered through every feature,
          the entire gate is one check at the single action that costs me
          anything — creating an inspection. Everything else, including data an
          unsubscribed user has already created, stays fully accessible. Far
          less code, far fewer ways to accidentally lock a paying customer out
          of their own reports.
        </p>
        <a
          href="https://eaveinspect.com/help/billing/subscriptions"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-600 hover:underline"
          >Full guide: Subscriptions &amp; billing →</a
        >
      </section>
    </div>
    <div
      class="lg:flex lg:flex-col sticky top-0 hidden max-h-screen md:col-span-2"
    >
      <PageOutline :items="outlineItems" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { useElementVisibility } from "@vueuse/core";
import type { Item } from "~/types";

useSeoMeta({
  title: "Eave - Software for Home Inspectors",
  description:
    "A solo SaaS product for home inspectors: custom templates, AI template import with Claude, an automated warnings engine, e-signed agreements, Stripe Connect payments, client scheduling, repair requests, and a native iOS app.",
});
useHead({ title: "Eave - Software for Home Inspectors" });

const templatesSection = useTemplateRef("templates");
const templateImportSection = useTemplateRef("templateImport");
const warningsEngineSection = useTemplateRef("warningsEngine");
const publishingSection = useTemplateRef("publishing");
const agreementsSection = useTemplateRef("agreements");
const paymentsSection = useTemplateRef("payments");
const schedulingSection = useTemplateRef("scheduling");
const repairRequestsSection = useTemplateRef("repairRequests");
const mobileIosSection = useTemplateRef("mobileIos");
const organizationsSection = useTemplateRef("organizations");
const billingSection = useTemplateRef("billing");

const templatesSectionVisible = useElementVisibility(templatesSection);
const warningsEngineSectionVisible = useElementVisibility(
  warningsEngineSection,
);
const templateImportSectionVisible = useElementVisibility(
  templateImportSection,
);
const publishingSectionVisible = useElementVisibility(publishingSection);
const agreementsSectionVisible = useElementVisibility(agreementsSection);
const paymentsSectionVisible = useElementVisibility(paymentsSection);
const schedulingSectionVisible = useElementVisibility(schedulingSection);
const repairRequestsSectionVisible = useElementVisibility(
  repairRequestsSection,
);
const mobileIosSectionVisible = useElementVisibility(mobileIosSection);
const organizationsSectionVisible = useElementVisibility(organizationsSection);
const billingSectionVisible = useElementVisibility(billingSection);

const outlineItems = computed(
  () =>
    [
      {
        id: "templates",
        label: "Custom Templates & Data Entry",
        items: [],
        isVisible: templatesSectionVisible.value,
      },
      {
        id: "template-import",
        label: "AI Template Import",
        items: [],
        isVisible: templateImportSectionVisible.value,
      },
      {
        id: "warnings-engine",
        label: "Warnings & Home-Care Rules Engine",
        items: [],
        isVisible: warningsEngineSectionVisible.value,
      },
      {
        id: "publishing",
        label: "Publishing & E-Signatures",
        items: [],
        isVisible: publishingSectionVisible.value,
      },
      {
        id: "agreements",
        label: "Agreements & E-Signing",
        items: [],
        isVisible: agreementsSectionVisible.value,
      },
      {
        id: "payments",
        label: "Client Payments (Stripe Connect)",
        items: [],
        isVisible: paymentsSectionVisible.value,
      },
      {
        id: "scheduling",
        label: "Built-in Client Scheduling",
        items: [],
        isVisible: schedulingSectionVisible.value,
      },
      {
        id: "repair-requests",
        label: "Repair Requests",
        items: [],
        isVisible: repairRequestsSectionVisible.value,
      },
      {
        id: "mobile-ios",
        label: "Mobile Web & Native iOS App",
        items: [],
        isVisible: mobileIosSectionVisible.value,
      },
      {
        id: "organizations",
        label: "Multi-User Organizations",
        items: [],
        isVisible: organizationsSectionVisible.value,
      },
      {
        id: "billing",
        label: "Stripe-Powered Billing",
        items: [],
        isVisible: billingSectionVisible.value,
      },
    ] as Item[],
);
</script>
