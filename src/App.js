import { useState, } from 'react';
import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';

// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import './styles/App.css';


const FormSection = () => {
  const [formValues, setFormValues] = useState({
    nyscCallUpNumber: "",
    stateRegistrationNumber: "",
    dateOfRegistration: "",
    surname: "",
    otherNames: "",
    title: "",
    sex: "",
    maritalStatus: "",
    previousMaidenName: "",
    previousOtherNames: "",
    dateOfChange: "",
    dateOfBirth: "",
    stateOfOrigin: "",
    localGovtArea: "",
    permanentHomeAddress: "",
    gsmPhoneNumber: "",

    nigerianStatesVisited: "",
    higherInstitutionAttended: "",
    stateCountryOfStudy: "",
    degreeHeld: "",
    areaOfSpecialization: "",
    subjectOfSpecialization: "",
    financeForYourEducation: "",

    nextOfKinName: "",
    nextOfKinAddress: "",
    nextOfKinTelephone: "",
    nextOfKinRelationship: "",

    contactNameICE: "",
    contactAddressICE: "",
    contactTelephoneICE: "",
    contactRelationshipICE: "",

    nameOfParent: "",
    occupationOfParent: "",
    addressOfParent: "",
    villageTownStateOfParent: "",
    telephoneOfParent: "",
    signatureOfCM: "",
    signatureOfRegOfficer: "",

    // personalStatistics: {
    // trouserSize: {
    // length: "",
    // waist: "",
    // bottom: "",
    // },
    // topSize: {
    // length: "",
    // chest: "",
    // neck: "",
    // },
    // },
    // kitsSupplied: {
    //   khakiShirtAndTrouser: "",
    //   whiteCanvas: "",
    //   plainVest: "",
    //   NYSCCrestedVest: "",
    //   belt: "",
    //   paitOfJungleBoots: "",
    //   pairOfPTShorts: "",
    //   youthCorpsCap: "",
    //   pairOfSocks: "",
    // },
    // posting: {
    //   jobExperience: "",
    //   typeOfPrimaryAssignment: "",
    //   institution: "",
    //   lga: "",
    //   town: "",
    //   primAssignmentResidentialAddress: "",
    //   email: "",
    // }
  })

  const formFields = [
    {
      name: "Demographics",
      type: "section-header",
      desc: "Demographic information about the CM"
    },
    {
      name: "NYSC CALL UP NO.",
      type: "text",
      value: formValues.nyscCallUpNumber,
      setValue: (newValue) => setFormValues({
        ...formValues,
        nyscCallUpNumber: newValue,
      }),
      validator: () => console.log("Validating call up number"),
      required: true,
      xs: 4,
    },
    {
      name: "STATE REGISTRATION NO.",
      type: "text",
      value: formValues.stateRegistrationNumber,
      setValue: (newValue) => setFormValues({ ...formValues, stateRegistrationNumber: newValue }),
      validator: () => console.log("Validating state reg no"),
      required: true,
      xs: 4,
    },
    {
      name: "DATE OF REGISTRATION",
      type: "date",
      value: formValues.dateOfRegistration,
      setValue: (newValue) => setFormValues({ ...formValues, dateOfRegistration: newValue }),
      validator: () => console.log("Validating dateOfRegistration"),
      required: true,
      xs: 4,
    },
    {
      name: "SURNAME",
      type: "text",
      value: formValues.surname,
      setValue: (newValue) => setFormValues({ ...formValues, surname: newValue }),
      validator: () => console.log("Validating surname"),
      required: true,
      xs: 4,
    },
    {
      name: "OTHER NAMES",
      type: "text",
      value: formValues.otherNames,
      setValue: (newValue) => setFormValues({ ...formValues, otherNames: newValue }),
      validator: () => console.log("Validating other names"),
      required: true,
      xs: 4,
    },
    {
      name: "TITLE",
      type: "text",
      value: formValues.title,
      setValue: (newValue) => setFormValues({ ...formValues, title: newValue }),
      validator: () => console.log("Validating title"),
      required: true,
      xs: 4,
    },
    {
      name: "SEX",
      type: "radio",
      value: formValues.sex,
      setValue: (newValue) => setFormValues({ ...formValues, sex: newValue }),
      validator: () => console.log("Validating sex"),
      required: true,
      options: ['male', 'female'],
      xs: 4,
    },
    {
      name: "MARITAL STATUS",
      type: "radio",
      value: formValues.maritalStatus,
      setValue: (newValue) => setFormValues({ ...formValues, maritalStatus: newValue }),
      validator: () => console.log("Validating marital status"),
      required: true,
      options: ['married', 'single', 'divorced', 'separated', 'widowed'],
      xs: 4,
    },
    {
      name: "PREVIOUS MAIDEN NAME",
      type: "text",
      value: formValues.previousMaidenName,
      setValue: (newValue) => setFormValues({ ...formValues, previousMaidenName: newValue }),
      validator: () => console.log("Validating previous maiden name"),
      required: false,
      xs: 4,
    },
    {
      name: "PREVIOUS OTHER NAMES",
      type: "text",
      value: formValues.previousOtherNames,
      setValue: (newValue) => setFormValues({ ...formValues, previousOtherNames: newValue }),
      validator: () => console.log("Validating previous other names"),
      required: false,
      xs: 4,
    },
    {
      name: "DATE OF CHANGE",
      type: "date",
      value: formValues.dateOfChange,
      setValue: (newValue) => setFormValues({ ...formValues, dateOfChange: newValue }),
      validator: () => console.log("Validating date of change"),
      required: false,
      xs: 4,
    },
    {
      name: "DATE OF BIRTH",
      type: "date",
      value: formValues.dateOfBirth,
      setValue: (newValue) => setFormValues({ ...formValues, dateOfBirth: newValue }),
      validator: () => console.log("Validating date of birth"),
      required: true,
      xs: 4,
    },
    {
      name: "STATE OF ORIGIN",
      type: "text",
      value: formValues.stateOfOrigin,
      setValue: (newValue) => setFormValues({ ...formValues, stateOfOrigin: newValue }),
      validator: () => console.log("Validating state of origin"),
      required: true,
      xs: 4,
    },
    {
      name: "LGA",
      type: "text",
      value: formValues.localGovtArea,
      setValue: (newValue) => setFormValues({ ...formValues, localGovtArea: newValue }),
      validator: () => console.log("Validating lga"),
      required: true,
      xs: 4,
    },
    {
      name: "PERMANENT HOME ADDRESS",
      type: "text",
      value: formValues.permanentHomeAddress,
      setValue: (newValue) => setFormValues({ ...formValues, permanentHomeAddress: newValue }),
      validator: () => console.log("Validating permanent home address"),
      required: true,
      xs: 4,
    },
    {
      name: "GSM PHONE NUMBER",
      type: "text",
      value: formValues.gsmPhoneNumber,
      setValue: (newValue) => setFormValues({ ...formValues, gsmPhoneNumber: newValue }),
      validator: () => console.log("Validating gsm phone number"),
      required: true,
      xs: 4,
    },
    ///////////////////////////////////////////////////////////
    {
      name: "Section 2",
      type: "section-header",
      desc: "Some info about section 2"
    },
    {
      name: "NIGERIAN STATES VISITED",
      type: "text",
      value: formValues.nigerianStatesVisited,
      setValue: (newValue) => setFormValues({ ...formValues, nigerianStatesVisited: newValue }),
      validator: () => console.log("Validating nigerian states visited"),
      required: true,
      xs: 4,
    },
    {
      name: "HIGHER INSTITUTION ATTENDED",
      type: "text",
      value: formValues.higherInstitutionAttended,
      setValue: (newValue) => setFormValues({ ...formValues, higherInstitutionAttended: newValue }),
      validator: () => console.log("Validating higher institution attended"),
      required: true,
      xs: 4,
    },
    {
      name: "STATE & COUNTRY OF STUDY",
      type: "text",
      value: formValues.stateCountryOfStudy,
      setValue: (newValue) => setFormValues({ ...formValues, stateCountryOfStudy: newValue }),
      validator: () => console.log("Validating state country of study"),
      required: true,
      xs: 4,
    },
    {
      name: "DEGREE HELD",
      type: "text",
      value: formValues.degreeHeld,
      setValue: (newValue) => setFormValues({ ...formValues, degreeHeld: newValue }),
      validator: () => console.log("Validating degree held"),
      required: true,
      xs: 4,
    },
    {
      name: "AREA OF SPECIALIZATION",
      type: "text",
      value: formValues.areaOfSpecialization,
      setValue: (newValue) => setFormValues({ ...formValues, areaOfSpecialization: newValue }),
      validator: () => console.log("Validating area of specialization"),
      required: true,
      xs: 4,
    },
    {
      name: "SUBJECT OF SPECIALIZATION",
      type: "text",
      value: formValues.subjectOfSpecialization,
      setValue: (newValue) => setFormValues({ ...formValues, subjectOfSpecialization: newValue }),
      validator: () => console.log("Validating subject of specialization"),
      required: true,
      xs: 4,
    },
    {
      name: "FINANCE FOR YOUR EDUCATION",
      type: "text",
      value: formValues.financeForYourEducation,
      setValue: (newValue) => setFormValues({ ...formValues, financeForYourEducation: newValue }),
      validator: () => console.log("Validating finance for your education"),
      required: true,
      xs: 4,
    },
    //////////////////////////////////////
    {
      name: "Next of Kin Information",
      type: "section-header",
      desc: "Information about the next of kin"
    },
    {
      name: "NEXT OF KIN NAME",
      type: "text",
      value: formValues.nextOfKinName,
      setValue: (newValue) => setFormValues({ ...formValues, nextOfKinName: newValue }),
      validator: () => console.log("Validating next of kin name"),
      required: true,
      xs: 4,
    },
    {
      name: "NEXT OF KIN ADDRESS",
      type: "text",
      value: formValues.nextOfKinAddress,
      setValue: (newValue) => setFormValues({ ...formValues, nextOfKinAddress: newValue }),
      validator: () => console.log("Validating next of kin address"),
      required: true,
      xs: 4,
    },
    {
      name: "NEXT OF KIN TELEPHONE",
      type: "text",
      value: formValues.nextOfKinTelephone,
      setValue: (newValue) => setFormValues({ ...formValues, nextOfKinTelephone: newValue }),
      validator: () => console.log("Validating next of kin telephone"),
      required: true,
      xs: 4,
    },
    {
      name: "NEXT OF KIN RELATIONSHIP",
      type: "text",
      value: formValues.nextOfKinRelationship,
      setValue: (newValue) => setFormValues({ ...formValues, nextOfKinRelationship: newValue }),
      validator: () => console.log("Validating next of kin relationship"),
      required: true,
      xs: 4,
    },
    ////////////////////////////////
    {
      name: "In Case of Emergency",
      type: "section-header",
      desc: "We'll use the information provided in the event of an emergency"
    },
    {
      name: "CONTACT NAME IN CASE OF EMERGENCE",
      type: "text",
      value: formValues.contactNameICE,
      setValue: (newValue) => setFormValues({ ...formValues, contactNameICE: newValue }),
      validator: () => console.log("Validating ICE name"),
      required: true,
      xs: 4,
    },
    {
      name: "CONTACT ADDRESS IN CASE OF EMERGENCE",
      type: "text",
      value: formValues.contactAddressICE,
      setValue: (newValue) => setFormValues({ ...formValues, contactAddressICE: newValue }),
      validator: () => console.log("Validating ICE address"),
      required: true,
      xs: 4,
    },
    {
      name: "CONTACT TELEPHONE IN CASE OF EMERGENCE",
      type: "text",
      value: formValues.contactTelephoneICE,
      setValue: (newValue) => setFormValues({ ...formValues, contactTelephoneICE: newValue }),
      validator: () => console.log("Validating ICE telephone"),
      required: true,
      xs: 4,
    },
    {
      name: "CONTACT RELATIONSHIP IN CASE OF EMERGENCE",
      type: "text",
      value: formValues.contactRelationshipICE,
      setValue: (newValue) => setFormValues({ ...formValues, contactRelationshipICE: newValue }),
      validator: () => console.log("Validating ICE relationship"),
      required: true,
      xs: 4,
    },

    ///////////////////////////////

    {
      name: "NAME OF PARENT",
      type: "text",
      value: formValues.nameOfParent,
      setValue: (newValue) => setFormValues({ ...formValues, nameOfParent: newValue }),
      validator: () => console.log("Validating parent name"),
      required: true,
      xs: 4,
    },
    {
      name: "OCCUPATION OF PARENT",
      type: "text",
      value: formValues.occupationOfParent,
      setValue: (newValue) => setFormValues({ ...formValues, occupationOfParent: newValue }),
      validator: () => console.log("Validating parent occupation"),
      required: true,
      xs: 4,
    },
    {
      name: "ADDRESS OF PARENT",
      type: "text",
      value: formValues.addressOfParent,
      setValue: (newValue) => setFormValues({ ...formValues, addressOfParent: newValue }),
      validator: () => console.log("Validating parent address"),
      required: true,
      xs: 4,
    },
    {
      name: "ADDRESS OF PARENT",
      type: "text",
      value: formValues.addressOfParent,
      setValue: (newValue) => setFormValues({ ...formValues, addressOfParent: newValue }),
      validator: () => console.log("Validating parent address"),
      required: true,
      xs: 4,
    },
    {
      name: "VILLAGE/TOWN/STATE OF PARENT",
      type: "text",
      value: formValues.villageTownStateOfParent,
      setValue: (newValue) => setFormValues({ ...formValues, villageTownStateOfParent: newValue }),
      validator: () => console.log("Validating parent village/town/state"),
      required: true,
      xs: 4,
    },
    {
      name: "TELEPHONE NUMBER OF PARENT",
      type: "text",
      value: formValues.telephoneOfParent,
      setValue: (newValue) => setFormValues({ ...formValues, telephoneOfParent: newValue }),
      validator: () => console.log("Validating parent telephone"),
      required: true,
      xs: 4,
    },
    {
      name: "SIGNATURE OF CM",
      type: "text",
      value: formValues.signatureOfCM,
      setValue: (newValue) => setFormValues({ ...formValues, signatureOfCM: newValue }),
      validator: () => console.log("Validating parent name"),
      required: true,
      xs: 4,
    },
    {
      name: "SIGNATURE OF REGISTRATION OFFICER",
      type: "text",
      value: formValues.signatureOfRegOfficer,
      setValue: (newValue) => setFormValues({ ...formValues, nameOfParent: newValue }),
      validator: () => console.log("Validating parent name"),
      required: true,
      xs: 4,
    },
  ]

  return (
    <Box sx={{ padding: "2rem", }}>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          {formFields.map(form =>
            form.type === "text" ?

              <Grid item xs={form.xs}>
                <TextField
                  label={form.name}
                  value={form.value}
                  onChange={(event) => form.setValue(event.target.value)}
                  onBlur={form.validator}
                  variant="outlined"
                  // size="small"
                  fullWidth
                  required={form.required}
                />
              </Grid> : form.type === "radio" ?

                <Grid item xs={form.xs}>
                  <FormControl required={form.required}>
                    <FormLabel>{form.name}</FormLabel>
                    <RadioGroup
                      name={`${form.name}`}
                      value={form.value}
                      onChange={(event) => form.setValue(event.target.value)}
                    >
                      {
                        form.options.map(option => {
                          return (
                            <FormControlLabel
                              value={option}
                              label={option}
                              control={<Radio />}
                            />
                          )
                        })
                      }
                    </RadioGroup>
                  </FormControl>
                </Grid> : form.type === "date" ?

                  <Grid item xs={form.xs}>
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                      {/* <DemoContainer components={['DatePicker']}> */}
                        <DatePicker label="Basic date picker" />
                      {/* </DemoContainer> */}
                    </LocalizationProvider>
                  </Grid> :

                  <Grid item xs={12}>
                    <Typography variant="h5" sx={{paddingTop: "1rem"}} >{form.name}</Typography>
                    <Typography variant="body2" sx={{ paddingBottom: "1rem" }}>{form.desc}</Typography>
                    <Divider />
                  </Grid>
            // {

          )}
        </Grid>

      </Container>
    </Box>
  )
}



const App = () => {

  return (
    <Box>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            NYSC Digitization Solution
          </Typography>
        </Toolbar>
      </AppBar>

      <FormSection />
    </Box>
  )
}

export default App;
