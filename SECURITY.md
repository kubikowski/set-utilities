# Security Policy

## Supported Versions

Currently, this project only supports its `latest` tagged version with security updates.

If subsequent `major` versions are released, then the most recent
`minor.patch` of each `major` version will also be supported with security updates. 

| Version  | Supported          |
|:---------|:-------------------|
| latest   | :white_check_mark: |
| < latest | :x:                |

## Reporting a Vulnerability

### Open an Issue
If you discover a vulnerability in this project's `source` or `distributed` code,
please file a Bug Report in the project's GitHub Issues.

A project maintainer will respond directly to your open issue, in a timely fashion.
You can expect the vulnerability to be tested and accepted or declined
by a project maintainer within a week of its being opened.

### Open a Pull Request
If you have a proposed in-code solution to fix the vulnerability, please make a
fork of this project. From the fork, please commit your proposed vulnerability fix.
Then, open a Pull Request targeting this project's `main` branch,
and referencing the issue you have created.

However, you are not responsible for proposing in-code solutions to any vulnerabilities
that you discover. Once a project maintainer has tested and accepted it,
then they will propose an in-code solution to the vulnerability.

Once the relevant Pull Request has been merged, a `patch` version will be released,
referencing the vulnerability in its Release Notes.
