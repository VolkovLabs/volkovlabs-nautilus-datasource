# Grafana HTTP API Data Source for Grafana

![Datasource](https://github.com/VolkovLabs/volkovlabs-grapi-datasource/raw/main/src/img/datasource.png)

[![Grafana 9](https://img.shields.io/badge/Grafana-9.4.3-orange)](https://www.grafana.com)
![CI](https://github.com/volkovlabs/volkovlabs-grapi-datasource/workflows/CI/badge.svg)
[![codecov](https://codecov.io/gh/VolkovLabs/volkovlabs-grapi-datasource/branch/main/graph/badge.svg)](https://codecov.io/gh/VolkovLabs/volkovlabs-grapi-datasource)
[![CodeQL](https://github.com/VolkovLabs/volkovlabs-grapi-datasource/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/VolkovLabs/volkovlabs-grapi-datasource/actions/workflows/codeql-analysis.yml)

## Introduction

The Grafana HTTP API Data Source for Grafana allows retrieving data from local and remote Grafana instances via HTTP API.

## Requirements

- **Grafana 8.5+, Grafana 9.0+** is required.

## Getting Started

The Grafana HTTP API Data Source can be installed from the [Grafana Catalog](https://grafana.com/grafana/plugins/volkovlabs-grapi-datasource/) or utilizing the Grafana command line tool.

For the latter, use the following command.

```bash
grafana-cli plugins install volkovlabs-grapi-datasource
```

## Features

- Connects to Local and Remote Grafana instances via HTTP API using API Keys and Tokens.
- Allows to get Health information.
- Allows to retrieve Annotations, Alerts, and Data Sources.

## Documentation

| Section                      | Description                                                  |
| ---------------------------- | ------------------------------------------------------------ |
| [Configuration](https://volkovlabs.io/plugins/volkovlabs-grapi-datasource/configuration) | Explains configuration settings for the Data Source.         |
| [Provisioning](https://volkovlabs.io/plugins/volkovlabs-grapi-datasource/provisioning) | Demonstrates how to automatically provision the Data Source. |
| [Release Notes](https://volkovlabs.io/plugins/volkovlabs-grapi-datasource/release)     | Stay up to date with the latest features and updates.        |

## Feedback

We love to hear from you. There are various ways to get in touch with us:

- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-grapi-datasource/issues/new/choose).
- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).
- Star the repository to show your support.

## License

Apache License Version 2.0, see [LICENSE](https://github.com/volkovlabs/volkovlabs-grapi-datasource/blob/main/LICENSE).
