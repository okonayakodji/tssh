import { Box, TextField } from "@mui/material";
import { transliteration, generate_certname } from "./Utils";
import { useState, useForm, useEffect} from "react";
import "./App.css";


export function Generator() {
    const [emailpostfix, setEmailPostfix] = useState("@telesales-service.org");
    const [names, setNames] = useState("");
    const [emails, setEmails] = useState("");
    const [certnames, setCertnames] = useState("");
    const [dublicates, setDublicates] = useState("");
  
    useEffect(() => {
      const splitted_names = names.includes("\n") ? names.split("\n") : [names];
      const generated_dublicates = splitted_names.filter((item, index) => splitted_names.indexOf(item) !== index);
      const dublicates_string = (generated_dublicates.length > 1) ? generated_dublicates.reduce((a, b) => {return `${a}\n${b}`}) : generated_dublicates;
      console.log(splitted_names)    
      let generated_certnames = [];
      let generated_emails = [];
      for (const name_id in splitted_names) {
        let name = splitted_names[name_id];
        let transliterated_name = transliteration(name).split(" ");
        let words_count = transliterated_name.length;
        if (words_count >= 3) {
          let certname = `${transliterated_name[0]}.${transliterated_name[1][0]}.${transliterated_name[2][0]}`
          generated_certnames.push(certname)
          generated_emails.push(certname + emailpostfix )
        } else if (words_count === 2) {
          let certname = `${transliterated_name[0]}.${transliterated_name[1][0]}`
          generated_certnames.push(certname)
          generated_emails.push(certname + emailpostfix)
        } else if (words_count === 1 && name !== "" && name !== " ") {
          let certname = `${transliterated_name[0]}`
          generated_certnames.push(certname)
          generated_emails.push(certname + emailpostfix )
        } else {
          let certname = `${transliterated_name[0]}`
          generated_certnames.push(certname)
          generated_emails.push("")
        }
      }
      setDublicates(dublicates_string)
      setCertnames((generated_certnames.length > 1) ? generated_certnames.reduce((a, b) => {return `${a}\n${b}`}) : generated_certnames[0])
      setEmails((generated_emails.length > 1) ? generated_emails.reduce((a, b) => {return `${a}\n${b}`}) : generated_emails[0])
    }, [emailpostfix, names])
  
    return (
      <Box id="app" fullWidth>
        <Box id="textfields" fullWidth>
          <TextField 
            id="names"
            label="Names"
            multiline
            rows={10}
            value={names}
            onChange={(e) => {setNames(e.target.value)}}/>
          <TextField 
            id="certnames"
            label="Certnames"
            multiline
            rows={10}
            value={certnames}
            InputProps={{readOnly: true}}
            />
          <TextField 
            id="emails"
            label="Emails"
            multiline rows={10}
            value={emails}
            InputProps={{readOnly: true}}/>
          <TextField 
            id="dublicates"
            label="Dublicates"
            multiline rows={10}
            value={dublicates}
            InputProps={{readOnly: true}}/>
        </Box>
        <Box id="settings">
          <TextField
            id="emailpostfix"
            label="Email postfix"
            value={emailpostfix}
            onChange={(e) => { setEmailPostfix(e.target.value)}}/>
        </Box>
      </Box>
    );
  }