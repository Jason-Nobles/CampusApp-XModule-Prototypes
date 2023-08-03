//payload - user authentication access
const jwt = require('jsonwebtoken');
const jwk = require('jwk-to-pem');
const key = { "kid": "4f348143-5091-49d8-a348-7fbe0f8a4384", "kty": "RSA", "n": "tqOZUrOeMIuoeqAx2d4p1TGCiVb21kri_Mq4nVtwtQJaO73XRf30Wqkl_lIhuyvFAoQSRI-0WBzPcc7X4T5KmqXw3y1vvEjYpQZauM9u-FM-C86iJY-i2avrEC7Dmi_Mtad6MollgIBf9o0bsfT4ap8hWY72h0SYr-ESdrntrOPDMXWlKSuhlufldPnRK0EPIRa36J6i5vT2HrCOjVypsSyjh9PvEzwUfmd2FFpxr74lCfI6Zr-MXYagkZ3sn9Id1qdL9741EKl1_9Bb0ah-t-UV2Pu_xdmPQIS0nwMx0kX3hV0WVzS3F5nlHLeJyku7OQPlog5Y4VuCBjROAMzBbw", "e": "AQAB" };



function getPayload(header){
    let payload = null;
    payload = jwt.verify(header.replace("Bearer ", ""), jwk(key));

    return payload;
    
}

module.exports.getPayload = getPayload;