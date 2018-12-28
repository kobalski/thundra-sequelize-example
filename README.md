# thundra-sequelize-example
Thundra sequelize tracing mysql calls

## Installation

```bash
npm install
```

#### 2 - Configuration

Open `serverless.yml` and set your AWS S3 deployment bucket & api key:

```yml
custom:
    thundraApiKey: <your-api-key>
    deploymentBucket: <your-s3-deployment-bucket>
```    
    
Edit `index.js` with your MySQL database credentials
    
#### 3 - Deploy

In `root directory`:

```bash
sls deploy
```
    
