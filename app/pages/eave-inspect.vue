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
        <a
          href="https://apps.apple.com/us/app/eave-easy-home-inspections/id6789208001"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 hover:scale-105 text-white rounded-full text-sm font-medium transition-colors"
        >
          <UIcon name="mdi:apple" size="16" />
          App Store
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
        <TechChip icon="i-heroicons:bell-alert" title="Push (APNs)" />
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
        whole job: turning a website visitor into a booked inspection, getting
        the agreement signed before arriving, building the report on-site,
        flagging issues automatically, and getting paid.
      </p>
      <p>
        It's a full-stack project in the truest sense — a Nuxt/Vue web app, an
        offline-capable native Swift iOS app with push notifications, a SQLite
        database behind Drizzle ORM, two separate Stripe integrations (my
        subscriptions and my customers' client payments), a set of Claude-backed
        AI features, and deployment on Cloudflare, all designed and shipped by
        me alone. The sections below walk through the major feature areas and
        the engineering decisions behind each one.
      </p>
      <iframe
        src="https://www.youtube.com/embed/videoseries?si=yjKCj3jrgbyW_wEr&amp;list=PLTdnAQGEq484"
        title="Eave overview and walkthrough"
        class="my-4 aspect-video w-full rounded-lg border border-neutral-200 dark:border-neutral-700"
        allowfullscreen
      ></iframe>
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
        <h3 class="text-xl font-semibold mt-8 mb-3">
          Keeping the edits made on-site
        </h3>
        <p>
          Those on-the-fly edits used to live and die with a single inspection.
          Now, when an inspector changed the template while filling it out, a
          Template step appears at the end of the job and lists every change on
          its own line — "Renamed Type to Roof Type", "Added the field Attic
          photos", "Reordered the subsections in Exterior" — each with its own
          checkbox. They keep the real improvements, skip the one-off notes for
          that house, and either apply them to the source template or save the
          set as a new one.
        </p>
        <p>
          Under the hood this is a <strong>three-way merge</strong>, not a diff:
          the template snapshot the inspection started from, what the inspector
          actually filled out, and the source template as it stands
          <em>today</em>. The first pair says what changed; the second says
          whether applying it would clobber a later edit made by a teammate.
          Conflicts are shown with both versions and left unchecked. Every
          change is a narrow patch (a rename carries only the label), so three
          edits to one field can be applied independently. Changes the template
          already has are dropped from the list, which makes the step fix itself
          — apply half today and tomorrow only the other half is waiting. The
          apply endpoint recomputes the change list server-side and filters by
          the ids the client sent; a client-supplied payload would be an
          arbitrary write into someone's templates.
        </p>
        <a
          href="https://eaveinspect.com/help/templates/editing-a-template"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-600 hover:underline"
          >Full guide: Editing a template →</a
        >
      </section>

      <section ref="aiFeatures">
        <h2 id="ai-features" class="text-3xl font-semibold mt-12 mb-4">
          AI Features (Claude + Structured Outputs)
        </h2>
        <p>
          Eave uses Claude in three places. Each one is aimed at the slowest
          step of a particular job, and each one hands back something the
          inspector reviews and edits instead of something that ships unseen.
        </p>
        <h3 class="text-xl font-semibold mt-8 mb-3">Template import</h3>
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
          A later pass taught the prompt the difference between a neutral list
          ("materials present") and a deficiency checklist. Deficiency lists now
          come across as <strong>Issues</strong> fields, where each option
          carries a severity and client-facing wording taken from the old
          template's canned comments, so ticking one writes a finding straight
          into the report. Every section and subsection also gets an icon picked
          to match what's in it.
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
        <h3 class="text-xl font-semibold mt-8 mb-3">
          Describe a subsection, get it built
        </h3>
        <p>
          Building a subsection by hand means adding each field, choosing its
          type, typing its options, and wiring up conditions and warnings one at
          a time. A <strong>Generate with AI</strong> button next to Add field
          takes a plain-English prompt — "add fields for roof material, age, and
          overall condition with a defect checklist" — and writes the fields,
          their types and options, their conditional visibility, and (on
          templates) their warning and home-care triggers.
        </p>
        <div class="flex items-center">
          <NuxtPicture
            class="w-full rounded-lg my-4"
            src="/ai-edit-subsection.png"
            alt="Screenshot of generating an Eave template subsection with AI"
            sizes="sm:600px md:800px lg:1400px"
            format="webp"
            placeholder
          />
        </div>
        <p>
          The important constraint is that it
          <strong>edits, not replaces</strong>: the current subsection is sent
          along with the prompt, so asking for three more fields on a subsection
          of ten brings the original ten back untouched. The same schema
          contract serves both the template editor and the public intake form.
          The intake form gets a narrower set of field types and no report
          triggers, because its answers never become findings. The result lands
          in the editor as an ordinary unsaved edit, so nothing is saved until
          the inspector hits save.
        </p>
        <h3 class="text-xl font-semibold mt-8 mb-3">Drafted summaries</h3>
        <p>
          The report summary is the first thing a client reads, and it's written
          at the point in the job when the inspector least wants to write
          anything. <strong>Generate with AI</strong> on the Final Comments
          field drafts one from the findings and answers already in the
          inspection: overall condition first, then the most serious findings,
          then routine maintenance. It's grounded only in that inspection's
          data, so it can't invent a finding, and it asks before replacing
          anything already written. Every account gets three free uses of each
          AI feature before they become part of Pro.
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
          rule or answer has since diverged, so nothing gets lost silently. On
          inspections marked auditable, all of it locks at publish time along
          with the rest of the report.
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
          Publishing, Delivery &amp; Optional Auditability
        </h2>
        <p>
          Once an inspection is complete, the inspector previews the report as a
          client would see it, downloads a PDF, and publishes it — which emails
          clients a stable, shareable link that keeps working across
          republishes. Additional recipients like the buyer's agent get a
          view-only copy.
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
          The biggest change here was a change in the product, not the code.
          Early Eave treated the published report as the legal artifact: it was
          signed, locked, and versioned so there was a paper trail of exactly
          what the client saw. In practice the thing inspectors actually need
          signed is the <strong>pre-inspection agreement</strong>, and that
          happens <em>before</em> the walk-through (see the next section). Once
          the legal step moved there, a locked, version-tracked report was
          mostly friction — an inspector who spotted a typo after publishing had
          to go through a whole ceremony to fix it. So version history was
          retired and locking became something the inspector opts into.
        </p>
        <p>
          An inspection can be marked <strong>auditable</strong> at creation (or
          while finishing a draft), and that choice is immutable afterward — a
          paper trail you can switch off later isn't much of a paper trail. A
          published auditable inspection is frozen: every content mutation
          (fields, photos, warnings, summary, clients, fee) returns
          <code>423 Locked</code> from one shared server-side check, and a
          single <code>isInspectionLocked</code> helper drives the web UI and is
          mirrored in the iOS app. To make a change, the inspector unpublishes,
          edits, and republishes, and clients are emailed that the report was
          updated. Everything else stays editable after publishing: an edit just
          marks the generated PDF stale, so the next download regenerates it
          instead of serving something that no longer matches the report.
        </p>
        <p>
          Signature capture for the inspector's own signature supports both
          drawing (mouse, trackpad, or touch) and uploading an image, which gets
          resized and compressed client-side before it's stored. Publishing is
          gated behind a profile-completeness check (license number, business
          info, and a signature all need to be on file), and inspectors choose
          which of those profile fields — address, licenses, phone, website,
          years in business, total inspections — show on the report, with
          per-inspection overrides that lock along with an auditable report.
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
        <p>
          One small detail I'm fond of: every link Eave sends (report, payment,
          agreement, booking, repair request) unfurls into a branded preview
          card in iMessage, WhatsApp, or Slack instead of showing up as a bare
          URL that looks like phishing. The catch is that link previews aren't
          built on the recipient's phone. Apple's, Google's, and Meta's servers
          fetch the page to build them, so anything in the Open Graph tags has
          left my system and sits in a message thread anyone can glance at. The
          preview names the inspector's business and <strong>never</strong> the
          property address or client, which only appear once the page is
          actually opened. The same links carry an explicit
          <code>noindex</code>, so a report posted somewhere public still can't
          show up in search results.
        </p>
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
          write the agreement once, attach it to an inspection when they create
          it, and every client with an email address automatically gets a
          signing link — so it comes back signed before the inspector pulls into
          the driveway. The client types their legal name, checks an "I agree"
          box, signs, and a signed PDF is stored on the inspection. This is the
          document that carries the legal weight now, which is what made report
          locking optional.
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
        <h3 class="text-xl font-semibold mt-8 mb-3">
          Importing an existing agreement
        </h3>
        <p>
          Every inspector already has an agreement, usually a PDF their attorney
          signed off on, and nobody wants to retype it. Import from PDF turns
          one into an editable template. It strips the running headers, footers,
          and page numbers, rejoins words hyphenated across line breaks, works
          out headings and bullet lists, and converts fill-in spots —
          <code>[Client Name]</code>,
          <code>&lt;&lt;Inspector Name&gt;&gt;</code>,
          <code>Inspection Fee: ______</code> — into Eave merge fields.
        </p>
        <p>
          This one is deliberately <strong>not</strong> AI. A legal document is
          exactly where a model rephrasing a clause "helpfully" is unacceptable,
          and the job is structural recovery rather than interpretation. So it's
          a mechanical, deterministic pipeline: fast, free, and it never changes
          a word it wasn't sure about. The result opens in the editor with a
          banner listing every substitution and everything it couldn't match,
          and nothing is saved until the inspector reviews it.
        </p>
        <p>
          The editor itself renders merge fields as atomic, labeled chips
          ("Property address" rather than
          <code>&#123;&#123;property_address&#125;&#125;</code>) that insert at
          the cursor and delete with one keystroke. They serialize back to the
          exact same tokens on save, so every existing template picked up the
          new editor with nothing to migrate and no change to what clients sign.
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
          I modeled this as a <strong>request → confirm</strong> flow rather
          than instant-booking: a client submitting a time doesn't touch the
          inspector's calendar until the inspector explicitly confirms it. That
          avoids a whole class of double-booking bugs you'd otherwise have to
          solve with locking, since nothing is committed until a human approves
          it. It still needs real-time conflict protection, though, so a pending
          request holds its slot and the server recomputes open slots on every
          submission, rejecting a pick that no longer fits. Inspectors who find
          the confirm step pointless can now switch it off, and the client's
          pick is booked immediately. That applies only to booking links sent
          for a job the inspector already created. Requests from the public link
          (below) always wait, because anyone can open that one.
        </p>
        <p>
          The booking page also stopped dead-ending. A client who is relocating,
          at work, or simply doesn't care which morning it is can choose
          <em>"I'm flexible — you pick a time"</em>, which is also the only
          option shown when there's no open availability at all, so the page
          never falls back to phone tag.
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
        <h3 class="text-xl font-semibold mt-8 mb-3">
          A public link that turns visitors into inspections
        </h3>
        <p>
          Everything above assumes the inspector already knows who the client
          is. The public request link covers the person who finds their website
          at 9pm: one permanent link for a website, email signature, or the back
          of a business card (with a downloadable QR code for yard signs).
          Visitors describe the property, answer the inspector's intake
          questions, optionally pick a real open slot, and leave their contact
          details.
        </p>
        <div class="flex items-center">
          <NuxtPicture
            class="w-full rounded-lg my-4"
            src="/request-inspection.png"
            alt="Screenshot of the Eave public inspection request page"
            sizes="sm:600px md:800px lg:1400px"
            format="webp"
            placeholder
          />
        </div>
        <p>
          The design choice that kept this small was adding
          <strong>no new inspection columns</strong>. A submission creates a
          draft inspection that already has a pending schedule request attached,
          so the existing confirm/decline endpoints, their emails, and the
          double-book guard all work on it unchanged. The intake questions reuse
          the template field editor, conditional logic included, and each answer
          is stored together with the question as it read when submitted, so
          editing the form later never rewrites a lead that already arrived. The
          token survives turning the feature off and on — it's printed on
          business cards — and rotating it is a separate, deliberate action.
          Because this is the only public endpoint that <em>creates</em> rows,
          it's limited to subscribers (otherwise it would be a way around the
          free-tier cap) and stops accepting requests once ten unactioned drafts
          are waiting.
        </p>
        <h3 class="text-xl font-semibold mt-8 mb-3">
          Scheduling with the whole day in view
        </h3>
        <p>
          Clients only ever saw slots that fit around other jobs, time off, and
          drive-time buffers, but the inspector booking a job manually got a
          bare date picker. Now setting a date draws the day to scale: other
          inspections with their buffers hatched in, time off, recurring blocks,
          working hours, and outlined gaps big enough for a full inspection.
          Click a gap to drop the job in, or use a shortcut like "Right after
          1420 Birch Ct". When a time doesn't fit, a line underneath says
          exactly why — <em>overlaps your lunch</em>,
          <em>leaves less than 30 min drive time</em> — and offers the nearest
          time that does.
        </p>
        <div class="flex items-center">
          <NuxtPicture
            class="w-full rounded-lg my-4"
            src="/new-inspector-scheduler.png"
            alt="Screenshot of the Eave inspector scheduling timeline"
            sizes="sm:600px md:800px lg:1400px"
            format="webp"
            placeholder
          />
        </div>
        <p>
          It's the same slot arithmetic the booking page runs, but with the
          opposite policy. For clients a conflict is a wall; for the inspector
          it's a <strong>warning</strong>. The save button turns amber and still
          saves, because double-booking a block or working a Saturday is a
          decision, not a mistake. Times are anchored to the timezone in the
          inspector's scheduling settings rather than their laptop's clock.
          Saving a time also offers to email every attendee, and if the job is
          rescheduled after that, the inspection flags that attendees are
          "holding the wrong time" until they're told.
        </p>
        <p>
          All of this now lives on one Scheduling page whose default tab is a
          month calendar. Every job is colored by what it needs from the
          inspector: scheduled, waiting on their confirmation, or still a draft.
          A lead from the public link is both a draft and a pending request, and
          it shows as pending, because the thing you can act on today outranks
          the thing you can't. The grid and the day timeline under it are built
          from the same per-day agenda function, so a day can never look
          different in the two views. Requests where the client asked the
          inspector to pick the time have no date to sit on, so they get a strip
          above the grid instead of getting lost.
        </p>
        <a
          href="https://eaveinspect.com/help/scheduling/overview"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-600 hover:underline"
          >Full guide: Scheduling overview →</a
        >
      </section>

      <section ref="attention">
        <h2 id="attention" class="text-3xl font-semibold mt-12 mb-4">
          "Needs Your Attention" Dashboard
        </h2>
        <p>
          The dashboard was good at showing what's coming up and what the
          inspector earned, but bad at showing what they owe someone. That
          information existed, just scattered one inspection at a time. A
          booking request only showed up if you opened that job, and a report
          PDF that failed to generate showed up nowhere. Now a
          <strong>Needs your attention</strong> table catches ten kinds of open
          item across four groups: clients waiting (requests to confirm, drafts
          to finish), report work (overdue reports, failed PDFs), money and
          paperwork (declined payments, unpaid reports, unsigned agreements),
          and scheduling (no date set, attendees holding a stale time).
        </p>
        <div class="flex items-center">
          <NuxtPicture
            class="w-full rounded-lg my-4"
            src="/eave-attention.png"
            alt="Screenshot of the Eave dashboard's Needs your attention table"
            sizes="sm:600px md:800px lg:1400px"
            format="webp"
            placeholder
          />
        </div>
        <p>
          The design rule is
          <strong>one row per job, not one per problem</strong>. Each inspection
          shows only its single most urgent item and links straight to the stage
          that resolves it, so the list stays a worklist instead of turning into
          a wall. What it leaves out matters as much. An unsigned agreement
          three weeks out is normal and stays quiet until the job is close, a
          booking link sitting with the client is waiting on <em>them</em>, and
          when nothing is open the table doesn't render at all.
        </p>
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
          directions to the property via Maps. The app is
          <strong>live on the App Store</strong>.
        </p>
        <div class="flex flex-wrap gap-3 mb-6">
          <a
            href="https://apps.apple.com/us/app/eave-easy-home-inspections/id6789208001"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 hover:scale-105 text-white rounded-full text-sm font-medium transition-colors"
          >
            <UIcon name="mdi:apple" size="16" />
            Download on the App Store
          </a>
        </div>
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
          Both clients talk to the same backend and data model, but the iOS app
          is built for the conditions inspectors actually work in: no signal in
          a basement or on a rural property. It's
          <strong>offline-first</strong>. Answers and photos write to a local
          store and into a durable outbox, and a sync engine replays that outbox
          once connectivity returns, with anything the server rejects shown to
          the inspector instead of dropped. Creation calls are idempotent on a
          client-generated request id, so an outbox that replays after a timeout
          can't create an inspection twice. Template building stays web-only by
          design; the app is purpose-built for fast data capture in the field,
          not administration.
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
        <p>
          A section navigator with search and per-section completion counts
          replaces scrolling through a hundred fields, and photos can be
          annotated with circles, arrows, and labels before they land in the
          report.
        </p>
        <div class="flex flex-wrap justify-center gap-4 my-4">
          <NuxtPicture
            class="max-w-[45%] sm:max-w-xs"
            :img-attrs="{ class: 'rounded-lg' }"
            src="/ios-navigate.webp"
            alt="Screenshot of the Eave iOS section navigator with search"
            sizes="sm:300px md:400px"
            format="webp"
            placeholder
          />
          <NuxtPicture
            class="max-w-[45%] sm:max-w-xs"
            :img-attrs="{ class: 'rounded-lg' }"
            src="/ios-annotate.webp"
            alt="Screenshot of annotating a photo in the Eave iOS app"
            sizes="sm:300px md:400px"
            format="webp"
            placeholder
          />
        </div>
        <h3 class="text-xl font-semibold mt-8 mb-3">Push notifications</h3>
        <p>
          The app now has a Notifications tab and sends push alerts when a
          client books, signs, or pays, with a separate switch for each kind so
          a payment doesn't interrupt a crawlspace. Push is sent over APNs
          directly from Cloudflare Workers, with no library involved: an ES256
          JWT signed with <code>jose</code> and a plain <code>fetch</code>. The
          more important change was routing all six places that created
          notifications through one <code>createNotification</code> chokepoint,
          so "a notification exists" and "the inspector's phone was told" are
          the same event rather than something each call site has to remember.
        </p>
        <h3 class="text-xl font-semibold mt-8 mb-3">
          Drafts: start in the driveway, finish at the desk
        </h3>
        <p>
          The app can start an inspection in seconds: just an address and a
          template. Everything else is left out on purpose — clients, fee,
          agent, agreement. That speed creates a gap, so these are real
          inspection rows flagged as <strong>drafts</strong>. Drafts can be
          filled out normally but can't be published, and creating one has zero
          side effects: no agreement email, no pay prompt, no booking link. A
          guided Complete Draft flow on the web collects the rest, pre-filled
          from the inspector's defaults. It's one server endpoint that mirrors
          normal inspection creation step for step, rather than a sequence of
          client-side PATCHes that could leave a row half-promoted. It's also
          the only place <em>auditable</em> can still be set, since locking on
          publish isn't a decision to make for someone on a GPS tap.
        </p>
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

usePageSeo({
  title: "Eave - Software for Home Inspectors | Tyler Higgs",
  description:
    "A solo SaaS product for home inspectors: custom templates, Claude-powered template import and generation, an automated warnings engine, pre-inspection agreements, Stripe Connect payments, scheduling with a public request link, repair requests, and an offline-first native iOS app with push notifications.",
  path: "/eave-inspect",
  image: "/og/eave-inspect.png",
});

const templatesSection = useTemplateRef("templates");
const aiFeaturesSection = useTemplateRef("aiFeatures");
const warningsEngineSection = useTemplateRef("warningsEngine");
const publishingSection = useTemplateRef("publishing");
const agreementsSection = useTemplateRef("agreements");
const paymentsSection = useTemplateRef("payments");
const schedulingSection = useTemplateRef("scheduling");
const attentionSection = useTemplateRef("attention");
const repairRequestsSection = useTemplateRef("repairRequests");
const mobileIosSection = useTemplateRef("mobileIos");
const organizationsSection = useTemplateRef("organizations");
const billingSection = useTemplateRef("billing");

const templatesSectionVisible = useElementVisibility(templatesSection);
const warningsEngineSectionVisible = useElementVisibility(
  warningsEngineSection,
);
const aiFeaturesSectionVisible = useElementVisibility(aiFeaturesSection);
const publishingSectionVisible = useElementVisibility(publishingSection);
const agreementsSectionVisible = useElementVisibility(agreementsSection);
const paymentsSectionVisible = useElementVisibility(paymentsSection);
const schedulingSectionVisible = useElementVisibility(schedulingSection);
const attentionSectionVisible = useElementVisibility(attentionSection);
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
        id: "ai-features",
        label: "AI Features (Claude)",
        items: [],
        isVisible: aiFeaturesSectionVisible.value,
      },
      {
        id: "warnings-engine",
        label: "Warnings & Home-Care Rules Engine",
        items: [],
        isVisible: warningsEngineSectionVisible.value,
      },
      {
        id: "publishing",
        label: "Publishing & Auditability",
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
        id: "attention",
        label: "Needs Your Attention",
        items: [],
        isVisible: attentionSectionVisible.value,
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
