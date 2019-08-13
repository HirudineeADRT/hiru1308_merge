let AWS = require('aws-sdk');
const sns = new AWS.SNS();
const s3 = new AWS.S3();

exports.handler = function (event, context, callback) {
    sns.publish({
        Message: '999',
        MessageAttributes: {
            'AWS.SNS.SMS.SMSType': {
                'DataType': 'String',
                'StringValue': 'Promotional'
            }
        },
        PhoneNumber: '99999'
    }).promise()
        .then(data => {
            // your code goes here
        })
        .catch(err => {
            // error handling goes here
        });
    //comment
    callback(null, { "message": "Successfully executed" });
}