# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

EconLLM-Lab is a practical guide for economists to work with Large Language Models (LLMs). The repository is structured as a comprehensive tutorial book covering LLM usage for economic research, with both documentation and practical code examples.

## Primary Content Structure

This is primarily a documentation and tutorial repository written in Chinese, organized as chapters covering:

- **第一章 (Chapter 1)**: Prerequisites - Command line tools, Python environment setup
- **第二章 (Chapter 2)**: API Usage - API overview, Python API calls, multi-threading acceleration  
- **第三章 (Chapter 3)**: Fine-tuning - Dataset preparation, model evaluation
- **第四章 (Chapter 4)**: RAG (Retrieval-Augmented Generation) - Knowledge base construction
- **第五章 (Chapter 5)**: MCP (Model Control Protocol) - Basic structure and examples
- **第六章 (Chapter 6)**: Multi-agent systems - Autogen and Coze platforms
- **第七章 (Chapter 7)**: LLM Application recommendations
- **附录 (Appendix)**: Additional resources and references

## Key Commands

### Documentation Site Management
```bash
# Install dependencies for MkDocs site
pip install -r requirements.txt

# Serve documentation locally for development
mkdocs serve

# Build static site
mkdocs build

# Deploy to GitHub Pages (automated via CI/CD)
mkdocs gh-deploy --force
```

### Development Workflow
- Documentation is built using MkDocs with Material theme
- Site automatically deploys to GitHub Pages on push to main/master branch via GitHub Actions
- Content is primarily in Markdown format with Chinese language support

## Code Examples Location

The `LECTURE2503/notebooks/example.ipynb` contains practical examples including:
- Basic OpenAI API calls
- DeepSeek API integration  
- Multi-threaded batch processing for large datasets
- Government work report analysis (实际处理案例)
- JSON parsing utilities for structured LLM outputs

## Architecture Notes

### Multi-threaded LLM Processing
The codebase includes a sophisticated `OpenAITextProcessor` class that:
- Implements rate limiting (500 RPM default)
- Supports concurrent processing with configurable thread pools
- Includes JSON parsing utilities for structured outputs
- Handles batch processing with progress tracking

### Data Processing Pipeline
Government work report analysis demonstrates:
- Text file ingestion from structured directory hierarchies
- Batch processing with custom prompts for information extraction
- CSV output generation for further analysis

## File Organization

- `/docs/` - Main documentation chapters in Markdown
- `/LECTURE2503/` - Course materials and practical examples
- `/site/` - Generated static documentation site
- `mkdocs.yml` - Site configuration
- `requirements.txt` - Python dependencies for documentation generation

## CI/CD

GitHub Actions automatically:
1. Installs Python dependencies from requirements.txt
2. Builds and deploys MkDocs site to GitHub Pages on push to main/master branches

## Language and Localization

The repository is primarily in Chinese (zh locale) and focuses on economic research applications of LLMs. All documentation, examples, and comments use Chinese language conventions.