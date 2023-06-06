//  Add your code here
const { Schema, model} = require("mongoose");

const celebritySchema = new Schema (
    {
        name: String,
        occupation: String,
        catchPhrase: String,
    }
)

const Celebrity = model ("celebrity", celebritySchema);

model.export = Celebrity;