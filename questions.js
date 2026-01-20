const QUESTION_POOL = [
  {
    "question": "What is the primary economic role of the life and pensions sector regarding capital?",
    "options": [
      "To prevent the government from spending money.",
      "To act as a channel for long-term investment into the economy.",
      "To provide short-term liquidity for high-street banks.",
      "To eliminate the need for personal savings."
    ],
    "correct": 1,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "Which of these is a key \"social\" value provided by life insurance?",
    "options": [
      "Increasing the national debt.",
      "Providing a safety net that reduces reliance on State welfare.",
      "Guaranteed stock market growth.",
      "Reducing the need for legal contracts."
    ],
    "correct": 1,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "In the UK, what is the standard \"cooling-off\" period for most life insurance policies?",
    "options": [
      "7 days.",
      "14 days.",
      "30 days.",
      "90 days."
    ],
    "correct": 2,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "The \"pensions gap\" refers to the difference between:",
    "options": [
      "State Pension and a person's actual salary.",
      "What people are saving and what they need for a comfortable retirement.",
      "Male and female life expectancy.",
      "The interest rates of banks and insurance firms."
    ],
    "correct": 1,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "Which body is primarily responsible for the prudential regulation of large insurance firms in the UK?",
    "options": [
      "The Financial Conduct Authority (FCA).",
      "The Prudential Regulation Authority (PRA).",
      "The Pensions Regulator (TPR).",
      "HM Revenue and Customs (HMRC)."
    ],
    "correct": 1,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "Define \"Maturity Value\" in the context of a life policy.",
    "options": [
      "The amount paid if the policyholder dies.",
      "The total premiums paid over the life of the policy.",
      "The amount paid at the end of a specified term if the life assured is still living.",
      "The penalty for canceling a policy early."
    ],
    "correct": 2,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "What is the main purpose of \"Automatic Enrolment\"?",
    "options": [
      "To force everyone to retire at 65.",
      "To increase the number of employees saving into a workplace pension.",
      "To replace the State Pension entirely.",
      "To tax high-earners more effectively."
    ],
    "correct": 1,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "What does \"Intermediation\" mean in financial services?",
    "options": [
      "A disagreement between two firms.",
      "The process of moving funds from savers to borrowers/investors.",
      "The legal process of closing a firm.",
      "Setting the price of a life insurance premium."
    ],
    "correct": 1,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "Which of the following is a \"Defined Contribution\" (DC) characteristic?",
    "options": [
      "The retirement income is guaranteed based on years of service.",
      "The employer takes all the investment risk.",
      "The final fund depends on contribution levels and investment performance.",
      "It is also known as a Final Salary scheme."
    ],
    "correct": 2,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "What is a \"Mutual\" insurance company?",
    "options": [
      "A company owned by external shareholders.",
      "A company owned by its policyholders.",
      "A government-run insurance body.",
      "A firm that only provides car insurance."
    ],
    "correct": 1,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "The term \"Life Assured\" refers to:",
    "options": [
      "The person who pays the premiums.",
      "The person whose death triggers the policy payout.",
      "The insurance company.",
      "The beneficiary named in the will."
    ],
    "correct": 1,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "What is the \"State Pension Age\" (SPA) currently trending towards in UK legislation?",
    "options": [
      "A fixed age of 60.",
      "Decreasing due to health improvements.",
      "Increasing to reflect longer life expectancy.",
      "Being abolished in favor of private savings."
    ],
    "correct": 2,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "Which document provides a summary of the key features of a financial product?",
    "options": [
      "Key Features Document (KFD).",
      "Trust Deed.",
      "Annual Report and Accounts.",
      "Articles of Association."
    ],
    "correct": 0,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "What is \"Tax Relief\" on pension contributions?",
    "options": [
      "A fine for not saving.",
      "An incentive where the government adds money to your pension based on your tax rate.",
      "The removal of VAT on insurance products.",
      "A discount on your council tax for being a pensioner."
    ],
    "correct": 1,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "What does \"Indemnity\" mean in general insurance?",
    "options": [
      "To make a profit from a loss.",
      "To be placed back in the same financial position as before the loss.",
      "A permanent life insurance contract.",
      "The legal right to sue an advisor."
    ],
    "correct": 1,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "Which sector of the economy is the largest \"institutional investor\"?",
    "options": [
      "Retail banks.",
      "Insurance companies and pension funds.",
      "Charity shops.",
      "Small and medium enterprises (SMEs)."
    ],
    "correct": 1,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "What is the \"Consumer Duty\" introduced by the FCA?",
    "options": [
      "A tax on luxury financial goods.",
      "A requirement for firms to act to deliver good outcomes for retail customers.",
      "The obligation for customers to read every page of a contract.",
      "A rule that all financial advice must be free."
    ],
    "correct": 1,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "What is a \"SIPP\"?",
    "options": [
      "Standard Insurance Protection Plan.",
      "Self-Invested Personal Pension.",
      "Socially Integrated Pension Program.",
      "Small Individual Protection Policy."
    ],
    "correct": 1,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "What is the primary difference between \"Life Assurance\" and \"Life Insurance\"?",
    "options": [
      "Assurance covers an event that will happen (death), Insurance covers an event that might happen.",
      "Assurance is for cars; Insurance is for people.",
      "They are legally identical in all UK contexts.",
      "Insurance is always more expensive."
    ],
    "correct": 0,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "Which of these is a function of the \"Secondary Market\" for shares?",
    "options": [
      "Issuing new shares to the public for the first time.",
      "Allowing existing shareholders to sell their shares to other investors.",
      "Setting government tax rates.",
      "Regulating the behavior of insurance CEOs."
    ],
    "correct": 1,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "A young family with a large mortgage wants to ensure the debt is cleared if the primary earner dies. Which product is most applicable?",
    "options": [
      "A whole-of-life policy.",
      "A decreasing term assurance policy.",
      "A high-risk equity ISA.",
      "A deferred annuity."
    ],
    "correct": 1,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "An employer wants to set up a pension scheme where they know exactly how much it will cost them each month. Which should they choose?",
    "options": [
      "Defined Benefit (DB).",
      "Defined Contribution (DC).",
      "A State Pension top-up.",
      "An unfunded scheme."
    ],
    "correct": 1,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "A client is concerned about \"inflation risk\" over a 30-year retirement. Which pension feature would help address this?",
    "options": [
      "A fixed-term annuity.",
      "An index-linked annuity.",
      "A level-term assurance policy.",
      "Storing cash in a savings account."
    ],
    "correct": 1,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "A 55-year-old worker receives a large inheritance and wants to put it into a pension for immediate tax relief. What is a key limit they must consider?",
    "options": [
      "The Maximum Investment Limit.",
      "The Annual Allowance.",
      "The State Pension Age.",
      "The Cooling-off period."
    ],
    "correct": 1,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "A firm is reviewing its \"Treating Customers Fairly\" (TCF) performance. Which data point is most relevant?",
    "options": [
      "The number of new products launched this year.",
      "The percentage of claims rejected and the reasons why.",
      "The CEO's annual bonus.",
      "The firm's physical office square footage."
    ],
    "correct": 1,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "An investor wants a product that provides both life cover and a chance for capital growth. Which is most suitable?",
    "options": [
      "Unit-linked whole-of-life.",
      "Term assurance.",
      "Income protection.",
      "A standard bank savings account."
    ],
    "correct": 0,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "A person starting their first job is automatically enrolled into a pension. They earn £25,000. Who must contribute to this scheme?",
    "options": [
      "Only the employee.",
      "Only the employer.",
      "Both the employee and the employer (and usually the government via tax relief).",
      "Only the government."
    ],
    "correct": 2,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "A client has a \"critical illness\" policy. They are diagnosed with a condition listed in the policy. How is the benefit usually paid?",
    "options": [
      "As a regular monthly income until they recover.",
      "As a tax-free lump sum.",
      "As a reimbursement for hospital bills only.",
      "As a payment to their mortgage lender only."
    ],
    "correct": 1,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "A firm wants to \"spread risk\" across many different policyholders to ensure no single death bankrupts the firm. This process is called:",
    "options": [
      "Hedging.",
      "Pooling of risks.",
      "Underwriting.",
      "Factoring."
    ],
    "correct": 1,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "An advisor is helping a client who is \"vulnerable\" due to recent bereavement. According to the Consumer Duty, the advisor should:",
    "options": [
      "Charge them double for the extra time taken.",
      "Provide extra support and ensure the client fully understands the implications of any decision.",
      "Refuse to offer advice until the client is \"stable.\"",
      "Ignore the bereavement and treat them like any other client."
    ],
    "correct": 1,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "A small business owner wants to save for retirement but wants to use the pension fund to buy their business premises. Which product is most appropriate?",
    "options": [
      "A standard Personal Pension.",
      "A SIPP (Self-Invested Personal Pension).",
      "A Stakeholder Pension.",
      "A basic ISA."
    ],
    "correct": 1,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "A client wants \"Income Protection.\" What is the \"deferred period\" they must choose?",
    "options": [
      "The time they must wait after buying the policy before they can claim.",
      "The time they must be off work due to illness before the payments start.",
      "The length of time the policy stays in force.",
      "The time it takes for the insurance company to process the application."
    ],
    "correct": 1,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "A person in their 20s wants to start saving for a house and retirement. They have a limited budget. Which is a key \"value\" of starting early?",
    "options": [
      "Compound interest (growth on growth).",
      "Guaranteed low inflation.",
      "Higher State Pension payouts.",
      "Reduced income tax rates."
    ],
    "correct": 0,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "An insurance company calculates a premium for a smoker that is higher than for a non-smoker. This process is known as:",
    "options": [
      "Risk assessment/Underwriting.",
      "Churning.",
      "Cold calling.",
      "Arbitrage."
    ],
    "correct": 0,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "A client has a \"Level Term\" policy for £200,000 over 20 years. If they die in year 19, how much is paid out?",
    "options": [
      "£10,000 (the remaining value).",
      "£200,000.",
      "Nothing, as it is too close to the end.",
      "£200,000 plus 19 years of interest."
    ],
    "correct": 1,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "Which of the following would be considered a \"protection gap\"?",
    "options": [
      "A person having too much insurance.",
      "A person with a mortgage but no life or critical illness cover.",
      "A person with a high-interest savings account.",
      "A firm with too many employees."
    ],
    "correct": 1,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "A client is worried about the \"solvency\" of their pension provider. Which UK scheme provides a safety net if a provider fails?",
    "options": [
      "The Financial Services Compensation Scheme (FSCS).",
      "The National Lottery.",
      "The Bank of England.",
      "The Department for Work and Pensions."
    ],
    "correct": 0,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "A company provides \"Death in Service\" benefits. This is an example of:",
    "options": [
      "A personal pension.",
      "Group life assurance.",
      "Private medical insurance.",
      "A shareholder agreement."
    ],
    "correct": 1,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "An advisor is comparing two products for a client. One has a high commission but is less suitable than a lower-commission product. The advisor chooses the high-commission one. This violates which principle?",
    "options": [
      "Profit maximization.",
      "Integrity and acting in the client's best interest.",
      "Freedom of choice.",
      "Market efficiency."
    ],
    "correct": 1,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "A retiree wants a guaranteed income for the rest of their life, no matter how long they live. The most appropriate product is:",
    "options": [
      "A savings account.",
      "A lifetime annuity.",
      "A 5-year fixed-term bond.",
      "Buying gold."
    ],
    "correct": 1,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "An advisor is told by a client that they plan to hide assets from their spouse during a divorce. What is the \"most appropriate\" ethical response?",
    "options": [
      "Help the client hide the assets to maintain \"client loyalty.\"",
      "Inform the advisor's supervisor and refuse to assist in any illegal or unethical activity.",
      "Immediately call the spouse and inform them.",
      "Charge a higher fee for the \"complex\" work."
    ],
    "correct": 1,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "A \"suitability letter\" must be sent to a client. When is the \"most appropriate\" time to send it?",
    "options": [
      "12 months after the trade is made.",
      "Before the contract is concluded (or immediately after, depending on the product type).",
      "Only if the client asks for it.",
      "Only if the investment loses money."
    ],
    "correct": 1,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "Which of the following \"most accurately\" describes the relationship between the FCA and the PRA?",
    "options": [
      "They are the same organization with two names.",
      "The PRA focuses on the financial stability of firms, while the FCA focuses on how they treat customers.",
      "The FCA regulates only banks, while the PRA regulates only insurance.",
      "The PRA reports to the FCA."
    ],
    "correct": 1,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "A client \"insists\" on a high-risk investment that the advisor has documented as \"unsuitable.\" If the advisor proceeds, what is the most critical action to take?",
    "options": [
      "Refuse the trade entirely.",
      "Document that the trade was \"unsolicited\" and that the client was warned of the risks.",
      "Buy the investment for themselves as well to show solidarity.",
      "Delete the suitability report."
    ],
    "correct": 1,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "What is the \"main\" risk of \"over-insurance\"?",
    "options": [
      "The insurance company will go bankrupt.",
      "The client is paying premiums for cover they do not need, wasting financial resources.",
      "It is illegal to have more than one life policy.",
      "The government will tax the payout at 100%."
    ],
    "correct": 1,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "In a \"Conflict of Interest\" situation, what is the \"first\" step an advisor should take?",
    "options": [
      "Ignore it if it involves less than £100.",
      "Disclose the conflict to the client.",
      "Resign immediately.",
      "Ask a colleague to sign the paperwork instead."
    ],
    "correct": 1,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "A client asks: \"Is the State Pension enough for a comfortable retirement?\" What is the \"most professional\" response?",
    "options": [
      "\"Yes, for everyone.\"",
      "\"No, it's useless.\"",
      "\"It provides a basic foundation, but most people require additional private savings to maintain their standard of living.\"",
      "\"I am not allowed to discuss the government.\""
    ],
    "correct": 2,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "Which of these is \"least likely\" to be a reason for the growth of the private pensions sector?",
    "options": [
      "Increasing life expectancy.",
      "Government incentives (tax relief).",
      "A decrease in the total population of the UK.",
      "Concerns over the long-term affordability of State welfare."
    ],
    "correct": 2,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "\"Soft Commissions\" (e.g., a fund manager giving an advisor a free holiday) are generally:",
    "options": [
      "Encouraged to build relationships.",
      "Prohibited or strictly limited to prevent bias in recommendations.",
      "Only allowed for life insurance, not pensions.",
      "Standard practice across the whole industry."
    ],
    "correct": 1,
    "topic": "Role and Value of Financial Services"
  },
  {
    "question": "When assessing \"Affordability\" for a life policy, an advisor must \"most importantly\" consider:",
    "options": [
      "The client's current income and expenditure, and if they can maintain premiums in the long term.",
      "Only the client's current bank balance today.",
      "The advisor's own commission requirements.",
      "The maximum amount the insurance company is willing to lend."
    ],
    "correct": 0,
    "topic": "Role and Value of Financial Services"
  }
];
