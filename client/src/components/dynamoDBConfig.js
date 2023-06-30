
import { DynamoDB } from 'aws-sdk';

export const dynamoDB = new DynamoDB.DocumentClient({
    region: 'us-east-1',
    accessKeyId: 'AKIA2CNAK7BASZTYEZMA',
    secretAccessKey: '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', 
});