/*
  ================================================================
  PUBLICATIONS DATA: edit this file to add or change papers.
  ================================================================
  Each entry is one { ... } block. Copy an existing block to add a paper.
  - section:  "published" | "working" | "progress"
  - status:   short label shown as a tag on working papers (e.g. "Under review, JCR")
  - kind:     optional tag for published items ("Commentary", "Practitioner", "Invited review")
  - summary:  shows when the visitor clicks "Summary". (Drafted by Claude in plain
              language. Swap in the official abstract any time.)
  - links:    any of paper / pdf / osf / researchgate. Leave one out and its button disappears.
  - press:    [{ outlet: "NPR", label: "Morning Edition", url: "..." }]
  - awards:   ["..."]
  - topics:   slugs from TOPICS below
  - tbc:      a note for Kellen: shows a small flag on the draft. Delete once confirmed.
*/

window.TOPICS = [
  { slug: "nudges",          label: "Nudges / Choice Architecture" },
  { slug: "jdm",             label: "JDM" },
  { slug: "social-psych",    label: "Social Psychology" },
  { slug: "consumer-choice", label: "Consumer Choice" },
  { slug: "experimentation", label: "A/B Tests / Experimentation" },
  { slug: "ethics",          label: "Ethical Dimensions of Marketing" },
  { slug: "attention",       label: "Attention & Memory" },
  { slug: "dark-patterns",   label: "Dark Patterns & Manipulative Design" },
  { slug: "ai",              label: "AI" },
  { slug: "heterogeneity",   label: "Heterogeneity" },
];

window.PUBS = [
  // ---------------------------------------------------------------- PUBLISHED
  {
    id: "confirmation-nudge", section: "published",
    authors: "Mrkva, Kellen, Shannon Duncan, Marissa Sharif, and Stanley Zuo",
    year: "2026", venue: "Journal of Consumer Research",
    title: "The confirmation nudge: Prompts to change or confirm initial preferences steer consumer choice",
    summary: "Asking consumers to either confirm their initial choice or switch to an alternative (such as an annual plan) shifts many of them toward the alternative. Lab studies and field experiments with real companies show how large the effect is, when it is strongest, and how consumers feel about being prompted.",
    links: { paper: "https://doi.org/10.1093/jcr/ucaf049", osf: "https://osf.io/zbw9h" },
    press: [{ outlet: "Knowledge at Wharton", url: "https://knowledge.wharton.upenn.edu/article/how-a-confirmation-nudge-can-make-customers-buy-more/" }],
    topics: ["nudges", "jdm", "consumer-choice", "experimentation", "ethics", "attention", "dark-patterns"],
    tbc: "Year/volume? Site said 'in press', CV said 'conditionally accepted'.",
  },
  {
    id: "ai-indifference", section: "published",
    authors: "Zhang, Raina, Ellie Kyung, Chiara Longoni, Luca Cian, and Kellen Mrkva",
    year: "2025", venue: "Cognition",
    title: "AI-induced indifference: Unfair AI reduces prosociality",
    summary: "In four experiments, people who were treated unfairly by an AI (rather than a human) were later less willing to punish unfair behavior by other people. They blame the AI less, which dampens their motivation to sanction injustice afterward.",
    links: { paper: "https://doi.org/10.1016/j.cognition.2024.105937", osf: "https://osf.io/n6xrq" },
    press: [{ outlet: "The Conversation", url: "https://news.darden.virginia.edu/in_the_media/unfair-decisions-by-ai-could-make-us-indifferent-to-bad-behavior-by-humans/" }],
    topics: ["jdm", "ethics", "ai"],
    tbc: "The Conversation link currently points to Darden's page about it. Paste the direct link.",
  },
  {
    id: "replication-database", section: "published",
    authors: "Röseler, L., L. Kaiser, C. Doetsch, … K. Mrkva, … and Y. Zhang",
    year: "2024", venue: "Journal of Open Psychology Data",
    title: "The replication database: Documenting the replicability of psychological science",
    summary: "A large collaborative database that catalogs replication attempts of findings in psychological science, so researchers can see which effects have held up.",
    links: { paper: "https://openpsychologydata.metajnl.com/articles/10.5334/jopd.101", osf: "https://osf.io/9r62x/overview" },
    topics: [],
    tbc: "No topic tag yet. Add an 'Open science' topic, or leave it untagged?",
  },
  {
    id: "dark-defaults", section: "published",
    authors: "Posner, Nathaniel, Andrey Simonov, Kellen Mrkva, and Eric J. Johnson",
    year: "2023", venue: "Proceedings of the National Academy of Sciences (PNAS)",
    title: "Dark defaults: How choice architecture steers political campaign donations",
    summary: "Before the 2020 U.S. election, several campaign websites added pre-checked boxes that turned one-time donations into recurring ones. Using the staggered timing of these changes, we estimate that the defaults increased donations by over $43 million and refund requests by almost $3 million.",
    links: { paper: "https://doi.org/10.1073/pnas.2218385120" },
    press: [
      { outlet: "NPR", label: "Morning Edition", url: "https://www.npr.org/2023/12/01/1216340254/how-political-campaigns-are-raising-millions-through-unwitting-donors" },
      { outlet: "NPR", label: "The Indicator", url: "https://www.npr.org/2023/11/21/1197958421/dark-defaults-political-campaigns-donors" },
    ],
    awards: ["2024 AMA-EBSCO-RRBM Award for Responsible Research in Marketing, Distinguished Winner"],
    topics: ["nudges", "consumer-choice", "ethics", "dark-patterns", "heterogeneity"],
  },
  {
    id: "societal-nudges", section: "published", kind: "Commentary",
    authors: "Johnson, Eric J., and Kellen Mrkva",
    year: "2023", venue: "Behavioral and Brain Sciences",
    title: "When nudges have societal-level impact",
    summary: "A commentary arguing that choice architecture can produce meaningful change at the level of whole societies, not only individual decisions.",
    links: { paper: "https://doi.org/10.1017/S0140525X23000961" },
    topics: ["nudges"],
  },
  {
    id: "app-adoption", section: "published",
    authors: "Reeck, Crystal, Nathaniel Posner, Kellen Mrkva, and Eric J. Johnson",
    year: "2023", venue: "Journal of Marketing",
    title: "Nudging app adoption: Choice architecture facilitates consumer uptake of mobile apps",
    summary: "Six preregistered experiments and a field experiment with nearly 600,000 users show that simple design changes, such as bundling feature decisions into one choice, using familiar colors, and wording options as if enabling were the default, substantially increase app adoption.",
    links: { paper: "https://doi.org/10.1177/00222429221141066", pdf: "https://nposner12.github.io/website/reeck2023.pdf", osf: "https://osf.io/6qyk5/?view_only=0734057fae4544118cc61f3b1cf242a6" },
    press: [
      { outlet: "California Management Review", url: "https://cmr.berkeley.edu/2025/02/bringing-digital-designs-to-light/" },
      { outlet: "Baylor Business Review", url: "https://bbr.baylor.edu/ad-app-ting/" },
    ],
    topics: ["nudges", "consumer-choice", "experimentation"],
  },
  {
    id: "nudges-disparities", section: "published",
    authors: "Mrkva, Kellen, Nathaniel Posner, Crystal Reeck, and Eric J. Johnson",
    year: "2021", venue: "Journal of Marketing",
    title: "Do nudges reduce disparities? Choice architecture compensates for low consumer knowledge",
    summary: "Nudges have their largest effects on consumers with less domain knowledge and lower socioeconomic status. As a result, well-designed nudges can reduce disparities in choice quality, while 'bad' nudges that steer people toward inferior options widen them.",
    links: { paper: "https://doi.org/10.1177/0022242921993186", pdf: "https://www.fox.temple.edu/sites/fox/files/documents/RBI/Inclusion/Do%20Nudges%20Reduce%20Disparities-Reeck%202021.pdf", osf: "https://osf.io/a7b32/?view_only=f4df788f178844f6b26e5274a9cbdab1" },
    awards: ["2023 AMA-EBSCO-RRBM Award for Responsible Research in Marketing, Finalist", "BSPA Best Paper Award, Honorable Mention"],
    topics: ["nudges", "consumer-choice", "ethics", "heterogeneity"],
    tbc: "Is this also the ACR Knowledge Forum 'Better Marketing for a Better World' exemplar?",
  },
  {
    id: "hbr-vulnerable", section: "published", kind: "Practitioner",
    authors: "Mrkva, Kellen, Eric J. Johnson, Crystal Reeck, and Nathaniel Posner",
    year: "2021", venue: "Harvard Business Review",
    title: "Design systems with your most vulnerable users in mind",
    summary: "A practitioner piece on why companies should design choice environments around the consumers who are most affected by them.",
    links: { paper: "https://hbr.org/2021/04/design-systems-with-your-most-vulnerable-users-in-mind" },
    topics: ["nudges", "ethics", "heterogeneity"],
  },
  {
    id: "attention-to-attention", section: "published",
    authors: "Mormann, Milica, Tom Griffiths, Chris Janiszewski, J. Edward Russo, … and Kellen Mrkva",
    year: "2020", venue: "Marketing Letters",
    title: "Time to pay attention to attention: Using attention-based process traces to better understand consumer decision-making",
    summary: "A multi-author perspective on how measuring attention, for example through eye-tracking and other process traces, can sharpen theories of consumer decision making.",
    links: { paper: "https://rdcu.be/b4GYr" },
    topics: ["jdm", "consumer-choice", "attention"],
  },
  {
    id: "attention-risk", section: "published",
    authors: "Mrkva, Kellen, Jennifer C. Cole, and Leaf Van Boven",
    year: "2020", venue: "Journal of Experimental Psychology: General",
    title: "Attention increases environmental risk perception",
    summary: "Directing attention toward environmental hazards makes them feel more emotionally intense, which in turn increases how risky people judge them to be.",
    links: { paper: "http://doi.org/10.1037/xge0000772", pdf: "https://par.nsf.gov/servlets/purl/10198300", osf: "https://osf.io/jktgz" },
    topics: ["attention"],
  },
  {
    id: "loss-aversion", section: "published",
    authors: "Mrkva, Kellen, Eric J. Johnson, Simon Gächter, and Andreas Herrmann",
    year: "2020", venue: "Journal of Consumer Psychology", kind: "Lead article",
    title: "Moderating loss aversion: Loss aversion has moderators, but reports of its death are greatly exaggerated",
    summary: "Across five samples totaling more than 17,700 people, loss aversion was robust, but its size varied. People with more knowledge, experience, and education were less loss averse, and older consumers were more loss averse.",
    links: { paper: "https://doi.org/10.1002/jcpy.1156", pdf: "https://nottingham-repository.worktribe.com/preview/3681607/Mrkva-Johnson-Gaechter-Herrmann_2019-11-20.pdf", osf: "https://osf.io/x3cjw" },
    press: [
      { outlet: "Forbes", url: "https://www.forbes.com/sites/traversmark/2020/03/09/as-the-stock-market-tumbles-psychology-research-urges-you-to-avoid-this-common-error/" },
      { outlet: "Columbia Business School", url: "https://business.columbia.edu/press-releases/cbs-press-releases/hating-lose-consumers-concerns-losing-drive-purchasing" },
    ],
    topics: ["jdm", "consumer-choice", "attention", "heterogeneity"],
  },
  {
    id: "mere-exposure", section: "published",
    authors: "Mrkva, Kellen, and Leaf Van Boven",
    year: "2020", venue: "Journal of Personality and Social Psychology",
    title: "Salience theory of “mere” exposure: Relative exposure increases liking, evaluative extremity, and emotional intensity",
    summary: "Repeated exposure makes stimuli stand out relative to competing stimuli. This salience, more than exposure per se, increases liking, makes evaluations more extreme, and intensifies emotion.",
    links: { paper: "https://doi.org/10.1037/pspa0000184", pdf: "https://par.nsf.gov/servlets/purl/10198302", osf: "https://osf.io/q6a3b" },
    topics: ["jdm", "attention", "social-psych"],
  },
  {
    id: "feelings-simulations", section: "published", kind: "Commentary",
    authors: "Mrkva, Kellen, Luca Cian, and Leaf Van Boven",
    year: "2020", venue: "Behavioral and Brain Sciences",
    title: "Above and beyond the content: Feelings influence mental simulations",
    summary: "A commentary arguing that the feelings that accompany mental simulations, and not just their content, shape judgment.",
    links: { paper: "https://doi.org/10.1017/S0140525X19003108" },
    topics: ["social-psych"],
  },
  {
    id: "attention-emotion", section: "published",
    authors: "Mrkva, Kellen, Jacob Westfall, and Leaf Van Boven",
    year: "2019", venue: "Psychological Science",
    title: "Attention drives emotion: Voluntary visual attention increases perceived emotional intensity",
    summary: "It is well known that emotion captures attention. Three experiments show the reverse: voluntarily attending to something makes it feel more emotionally intense.",
    links: { paper: "https://journals.sagepub.com/doi/full/10.1177/0956797619844231", osf: "https://osf.io/r483u" },
    topics: ["jdm", "attention"],
  },
  {
    id: "simulational-fluency", section: "published",
    authors: "Mrkva, Kellen, Mark Travers, and Leaf Van Boven",
    year: "2018", venue: "Journal of Experimental Psychology: General",
    title: "Simulational fluency reduces feelings of psychological distance",
    summary: "Events that are easier to imagine feel psychologically closer in time, space, and likelihood.",
    links: { pdf: "https://www.researchgate.net/profile/Kellen_Mrkva/publication/322641608_Simulational_Fluency_Reduces_Feelings_of_Psychological_Distance/links/5a6604f54585158bca52cdbd/Simulational-Fluency-Reduces-Feelings-of-Psychological-Distance.pdf", osf: "https://osf.io/efrw5" },
    topics: ["social-psych"],
    tbc: "Need DOI for the Paper button.",
  },
  {
    id: "giving-fast-slow", section: "published",
    authors: "Mrkva, Kellen",
    year: "2017", venue: "Journal of Behavioral Decision Making",
    title: "Giving, fast and slow: Reflection increases costly (but not uncostly) charitable giving",
    summary: "Encouraging people to reflect before deciding increases charitable giving when giving is costly to them, but not when it is costless.",
    links: { paper: "https://onlinelibrary.wiley.com/doi/10.1002/bdm.2023" },
    topics: ["jdm", "consumer-choice"],
  },
  {
    id: "attentional-accounting", section: "published",
    authors: "Mrkva, Kellen, and Leaf Van Boven",
    year: "2017", venue: "Journal of Experimental Psychology: General",
    title: "Attentional accounting: Voluntary spatial attention increases budget category prioritization",
    summary: "Paying attention to a budget category (for example, by looking at it) leads people to prioritize it when allocating money.",
    links: { pdf: "https://psycnet.apa.org/fulltext/2017-30269-001.pdf", osf: "https://osf.io/chsn9" },
    topics: ["jdm", "consumer-choice", "attention"],
    tbc: "Need DOI for the Paper button.",
  },
  {
    id: "attention-simulation-review", section: "published", kind: "Invited review",
    authors: "Mrkva, Kellen, Jairo Ramos, and Leaf Van Boven",
    year: "2020", venue: "Psychology of Consciousness: Theory, Research, and Practice",
    title: "Attention influences emotion, judgment, and decision making to explain mental simulation",
    summary: "A review of how attention shapes emotion, judgment, and decision making, and how this explains the effects of mental simulation.",
    links: { paper: "http://dx.doi.org/10.1037/cns0000221", pdf: "https://par.nsf.gov/servlets/purl/10198301" },
    topics: ["jdm", "attention"],
    tbc: "From your CV's 'additional publications'. Keep on the site?",
  },

  // ---------------------------------------------------------------- WORKING PAPERS
  {
    id: "cancel-me", section: "working", status: "Under review, Journal of Consumer Research",
    authors: "with Edward Fox*, Matthew Fisher*, and Ioannis Evangelidis; *co-first authors",
    title: "Cancel me if you can: Understanding the costs of cancellation sludge for consumers and firms",
    summary: "Examines how obstacles to cancelling subscriptions ('cancellation sludge') affect consumers and whether they actually pay off for the firms that use them.",
    topics: ["nudges", "consumer-choice", "ethics", "dark-patterns"],
    tbc: "Author order and status still current?",
  },
  {
    id: "structured-reflection", section: "working", status: "Revise & resubmit, Risk Analysis",
    authors: "with Michaela Essbach, Tehila Kogut, and Leaf Van Boven",
    title: "Structured reflection reduces probability neglect",
    summary: "Guided reflection about one's own decision criteria helps people give appropriate weight to probabilities.",
    topics: ["jdm"],
    tbc: "Site and CV differ on title, co-author surname (Essbach/Huber) and status.",
  },
  {
    id: "hidden-options", section: "working", status: "In preparation for Journal of Marketing",
    authors: "with Yuna Choe, Ashley Otto, and Jake Floyd",
    title: "Hidden options: How choice architecture can steer consumers away from seeing options",
    summary: "Shows how the layout of choice environments can keep consumers from ever noticing some options, steering choice before evaluation even begins.",
    topics: ["nudges", "consumer-choice", "ethics", "attention", "dark-patterns"],
  },
  {
    id: "effort-accounting", section: "working", status: "Working paper",
    authors: "with Jesse Walker, R.A. Farrokhnia, and Indeesh Mukhopadhyay",
    title: "Effort accounting: Consumers prefer to spend hard-earned money on long-lasting purchases and investments",
    summary: "People mentally earmark hard-earned money for durable purchases and investments rather than fleeting experiences.",
    topics: ["jdm", "consumer-choice"],
  },

  // ---------------------------------------------------------------- RESEARCH IN PROGRESS
  { id: "retirement", section: "progress", title: "Nudging consumer decisions about retirement savings", authors: "with Eric Johnson, Caroline Weaver, and collaborators at a large investment firm", topics: ["nudges", "consumer-choice", "experimentation"] },
  { id: "what-vs-whether", section: "progress", title: "Does choice architecture influence what we buy more than whether we buy?", authors: "with Dilip Soman and Yuna Choe", topics: ["nudges", "consumer-choice"] },
  { id: "cumulative-ca", section: "progress", title: "The cumulative effects of choice architecture: How much does online choice architecture shift our purchases?", authors: "with Eric Johnson", topics: ["nudges", "consumer-choice"] },
  { id: "couples", section: "progress", title: "Are couples more “green” than the sum of their parts? Attribute weights of couples buying products together vs. separately", authors: "with Jim Roberts and Meredith David", topics: ["jdm", "consumer-choice"] },
  { id: "realism-ai", section: "progress", title: "Experimental Realism AI: A method to enhance the realism and value of consumer research", authors: "", topics: ["experimentation", "ai"] },
];
