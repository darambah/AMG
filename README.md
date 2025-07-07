PLAYWRIGHT PAGE OBJECT MODEL PROJECT
———————————————————————————————————
HOW TO RUN SCRIPTS

You can install playwright by running this command on the terminal

npm install playwright

Run test by keying in
Run test Npx playwright test
-----------------------------------

SECURITY TEST
Security Scan with OWASP ZAP

This project was scanned using OWASP ZAP (Baseline Scan) to detect common web vulnerabilities.

Run it with Docker: Run bash

docker run -v $(pwd):/zap/wrk/:rw -t owasp/zap2docker-stable zap-baseline.py -t https://darambah.com -r zap_report.html

To regenerate the scan report:

Run bash

docker pull zaproxy/zap-weekly docker run --rm -v $(pwd):/zap/wrk/:rw -t zaproxy/zap-weekly
zap-baseline.py -t https://darambah.com -r zap_report.html

scan folder contains a html file for this test if you do not want to run it.

Automate it in GitHub Actions
Add a .github/workflows/zap.yml:

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

----------------------------------------------

Test Strategy 
Contains my test strategu file for streamAMG
        
--------------------------------------------
JMETER SCRIPS

Install Apache JMeter (same or compatible version)
Open the .jmx file via File > Open

run on terminal within the bin folder of jmeter
 cd bin
 sh jmeter.sh
This should load the jmeter up in case you cannot open it

Run the test by clicking a play button.
To see test results open web flow summary report
