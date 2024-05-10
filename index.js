import {
  RekognitionClient,
  DetectFacesCommand
} from "@aws-sdk/client-rekognition";

// a client can be shared by different commands.
const client = new RekognitionClient();

// Get the sample image from Amazon
const imageUrl = "https://a.b.cdn.console.awsstatic.com/a/v1/QBHUCWTQX56J72PLN3AKTIEU2NKZ2SPLDXEBR2BQDHK4WW6UBCMA/StaticImageAssets/Images/drive_resized.jpg";
const imageResponse = await fetch(imageUrl)
const imageBytes = Buffer.from(await imageResponse.arrayBuffer())

const input = { // DetectFacesRequest
  Image: { // Image
    Bytes: imageBytes
  },
  Attributes: [ // Attributes
    "ALL"
  ],
};

const command = new DetectFacesCommand(input);
const response = await client.send(command);

const face1 = response.FaceDetails[0];

console.log(face1.AgeRange)
console.log(face1.Emotions)