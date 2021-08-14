const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mean-empresas',{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(db => console.log('bd is connected')).catch((err)=> console.log(err))