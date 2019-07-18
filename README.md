# snp-viewer-demo

API:

| path | verb | returns |
| ---- | ---- | ---- |
| /api/experiment| GET | JSON representation of all expriments in assetconfig.yaml |
| /api/experiment/{experiment} | GET | JSON representation of all PIs in VCF header |
| /api/generateGFF | POST | returns gff. Expected parameters of Ref={experiment:PI}&Variant={sameexperiment:PI}, with any number of variants |
| | | |
| / | GET | tool UI |
