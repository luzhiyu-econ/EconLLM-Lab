# EconLLM-Lab 🧠📈

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

EconLLM-Lab is a repository showcasing how to apply Large Language Models (LLMs) in economics research. This project covers examples of prompt engineering, text classification, sentiment analysis, and other advanced NLP techniques, with a focus on real-world data in economics.



---

## Features 🌟

- **Prompt Engineering Tutorial**
  Pre-built templates for economic policy analysis, financial sentiment extraction, and survey data processing.

- **Model Fine-tuning Recipes**
  Starter code for adapting LLMs to domain-specific tasks like legal document parsing in economic contexts.

- **LLM Econ Application Example**
  Two published example of using LLMs for sentence and sentiment extraction.

- **Open Source projiects recomendation**
  Recomendation of open source projects with LLM applications.

---

## Repository Structure 📂

```text
EconLLM-Lab/
├── .gitignore           # Specifies untracked files
├── docs/                # Supplementary materials
│   └── case_studies/    # Detailed use cases
├── notebooks/           # Jupyter Notebook experiments
│   └── example.ipynb    # Main demo notebook
├── llm_report.pdf/      # Main project documentation
└── README.md            # Project overview
```

### Data Manifest
- `政府采购公告.csv`: Raw government procurement announcements (Chinese)
- `政府采购公告_结果.csv`: Processed data with LLM-generated labels 
- Reference PDFs: Curated academic papers on LLM applications in economics

---

## Quick Start 🚀

1. **Clone & Setup**
   ```bash
   git clone https://github.com/luzhiyu-econ/EconLLM-Lab.git
   cd EconLLM-Lab
   ```

2. **Configure API Keys**
   Create `.env` file:
   ```ini
   # .env
   OPENAI_API_KEY="your-api-key"
   ```

3. **Run Demo Analysis**
   Launch Jupyter:
   ```bash
   jupyter notebook notebooks/example.ipynb
   ```

---

