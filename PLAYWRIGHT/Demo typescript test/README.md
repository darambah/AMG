# streamAMGDemoTest



PLAYWRIGHT PAGE OBJECT MODELPROJECT


Install playwright
Create an object model file system for the following files within the playwright

Pages - functions - methods - features

———————————————————————————————————


 HOW TO RUN SCRIPTS


You can install playwright by running this command on the terminal

npm install playwright


Run test
Npm playwright test



Security Scan with OWASP ZAP

This project was scanned using OWASP ZAP (Baseline Scan) to detect common web vulnerabilities.

Run it with Docker:
Run bash

docker run -v $(pwd):/zap/wrk/:rw -t owasp/zap2docker-stable zap-baseline.py -t https://darambah.com -r zap_report.html


To regenerate the scan report:

Run bash

docker pull zaproxy/zap-weekly
docker run --rm -v $(pwd):/zap/wrk/:rw -t zaproxy/zap-weekly \
  zap-baseline.py -t https://darambah.com -r zap_report.html




———————————————————————————————————

 5. Automate it in GitHub Actions

Add a `.github/workflows/zap.yml`:

```yaml
name: ZAP Scan

on: [push, pull_request]

jobs:
  zap_scan:
    runs-on: ubuntu-latest
    steps:
    - name: Run ZAP Baseline Scan
      uses: zaproxy/action-baseline@v0.11.0
      with:
        target: 'https://darambah.com'

JMETER SCRIPS

Install Apache JMeter (same or compatible version)
Open the .jmx file via File > Open

Run the test by clicking a play button.
To see test results open web flow summary report


