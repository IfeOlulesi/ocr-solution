import { useState, } from 'react';
import {
  AppBar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TableContainer,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';

// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';

import './styles/App.css';




function convertCamelCaseToTitleCase(str) {
  console.log(str)
  return str.replace(/([a-z])([A-Z])/g, '$1 $2')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

const MyFormHeader = ({ form }) => {
  return (
    <Grid item xs={12} key={form.name}>
      <Typography variant="h5" sx={{ paddingTop: "1rem" }} >{form.name}</Typography>
      <Typography variant="body2" sx={{ paddingBottom: "1rem" }}>{form.desc}</Typography>
      <Divider />
    </Grid>
  )
}

const MyTextField = ({ form }) => {
  return (
    <Grid item xs={form.xs} key={form.name}>
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
    </Grid>
  )
}

const MySelect = ({ form }) => {
  return (
    <Grid item xs={form.xs} key={form.name}>
      <FormControl fullWidth required={form.required}>
        <InputLabel label={`${form.name}-label`}>{form.name}</InputLabel>
        <Select
          labelId={`${form.name}-label`}
          id={`${form.name}`}
          value={form.value}
          label={form.name}
          onChange={(event) => form.setValue(event.target.value)}
        >
          {form.options.map(option => (
            <MenuItem value={option.value}>{option.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  )
}

const MyDatePicker = ({ form }) => {
  return (
    <Grid item xs={form.xs} key={form.name}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DatePicker label="Basic date picker" />
      </LocalizationProvider>
    </Grid>
  )
}

function isAlphabetic(str) {
  return /^[a-zA-Z\s]+$/.test(str);
}

const MyTable = ({ form }) => {
  return (
    <Grid item xs={form.xs} key={form.name} sx={{ display: "flex", justifyContent: "center", flexDirection: "row" }}>
      <TableContainer component={Paper} sx={{ maxWidth: 650, border: "1px solid lightgrey" }}>
        <Table aria-label="simple table" size="small" >
          <TableHead>
            {form?.tableSection &&
              <TableRow>
                <TableCell align="center" sx={{ fontWeight: "bolder" }} colSpan={5}> {form?.tableSection} </TableCell>
              </TableRow>
            }
            <TableRow>
              {form.columnHeaders.map(column => {
                return (
                  <TableCell sx={{ fontWeight: "bolder" }}>{column}</TableCell>
                )
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {form.rows.map((row) => (
              <TableRow
                hover
                key={row.label}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {Array.isArray(row) ?
                  row.map(cell => (
                    <TableCell>
                      {cell}
                      {
                        !isAlphabetic(cell) &&
                        <Checkbox />
                      }
                    </TableCell>
                  )
                  ) :
                  <>
                    <TableCell component="th" scope="row"> {row.count} </TableCell>
                    <TableCell> {row.label} </TableCell>
                    {row?.type === 'textfield' &&
                      <TableCell>
                        <TextField
                          placeholder="Ex: 2,3..."
                          value={row.value}
                          onChange={(event) => row.setValue(event.target.value)}
                          onBlur={row.validator}
                          variant="outlined"
                          size="small"
                          type="number"
                          fullWidth
                        />
                      </TableCell>}
                  </>
                }
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  )
}


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

    personalStatistics: {
      trouserSize: {
        length: "",
        waist: "",
        bottom: "",
      },
      topSize: {
        length: "",
        chest: "",
        neck: "",
      },
    },

    kitsSupplied: {
      khakiShirtAndTrouser: "",
      whiteCanvas: "",
      plainVest: "",
      crestedVest: "",
      belt: "",
      pairOfJungleBoots: "",
      pairOfPtShorts: "",
      youthCorpsCap: "",
      pairOfSocks: "",
    },


    posting: {
      jobExperience: "",
      typeOfPrimaryAssignment: "",
      institution: "",
      lga: "",
      town: "",
      primAssignmentResidentialAddress: "",
      email: "",
    }
  })


  /**
   * 
   * @returns [{label, textFieldProps: {name, value, onChange, }}]
   */
  const gen = () => {
    /*
    input: formValues.something
    output: [{label, textFieldProps: {name, value, onChange, }}]

    */

    let source = Object.keys(formValues.kitsSupplied)
    let output = []
    let count = 1
    source.map(kitPart => {

      const model = {
        label: convertCamelCaseToTitleCase(kitPart),
        count,
        type: "textfield",
        textFieldProps: {
          name: convertCamelCaseToTitleCase(kitPart),
          value: formValues.kitsSupplied[kitPart],
          setValue: newValue => {
            let newObj = { ...formValues }
            newObj.kitsSupplied[`${kitPart}`] = newValue
            setFormValues(newObj)
          },
          validator: () => console.log(`validating ${kitPart}`),
        }
      }
      output.push(model)
      count += 1
    })

    return output
  }

  const createTrouserData = () => {
    return [
      ["LENGTH", `36" - 48"`, `35" - 46"`, `32" - 33"`, `30" - 32"`],
      ['WAIST', `40" - 42"`, `48" - 40"`, `36" - 38"`, `32" - 35"`],
      ['BOTTOM', `16" - 17"`, `15" - 16"`, `14" - 15"`, `12" - 14"`],
    ]
  }

  const createTopData = () => {
    return [
      ['LENGTH', `36" - 48"`, `35" - 46"`, `32" - 33"`, `30" - 32"`],
      ['CHEST', `40" - 42"`, `48" - 40"`, `36" - 38"`, `32" - 35"`],
      ['NECK', `16" - 17"`, `15" - 16"`, `14" - 15"`, `12" - 14"`],
    ]
  }

  const formFields = [
    // demographics
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
      type: "select",
      value: formValues.sex,
      setValue: (newValue) => setFormValues({ ...formValues, sex: newValue }),
      validator: () => console.log("Validating sex"),
      required: true,
      options: [{ label: 'male', value: 'male' }, { label: 'female', value: 'female' }],
      xs: 4,
    },
    {
      name: "MARITAL STATUS",
      type: "select",
      value: formValues.maritalStatus,
      setValue: (newValue) => setFormValues({ ...formValues, maritalStatus: newValue }),
      validator: () => console.log("Validating marital status"),
      required: true,
      options:
        [
          {
            label: 'married',
            value: 'married',
          },
          {
            label: 'single',
            value: 'single',
          },
          {
            label: 'divorced',
            value: 'divorced',
          },
          {
            label: 'separated',
            value: 'separated',
          },
          {
            label: 'widowed',
            value: 'widowed',
          },
        ],
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
    // Section 2
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
    // Next of Kin Information
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
    // ICE information
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

    // Parent Information

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
      setValue: (newValue) => setFormValues({ ...formValues, signatureOfRegOfficer: newValue }),
      validator: () => console.log("Validating signature of registration officer"),
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
    // PERSONAL STATISTICS
    {
      name: "Personal Statistics",
      type: "section-header",
      desc: "Information about your top and trouser length"
    },
    {
      name: "Trouser",
      type: "table",
      columnHeaders: ["SIZE", "EXTRA LARGE", "LARGE", "MEDIUM", "SMALL"],
      rowHeaders: ['SIZE', 'LENGTH', 'WAIST', 'BOTTOM'],
      tableSection: "Trouser Measurement",
      rows: createTrouserData(),
      xs: 12,
    },
    {
      name: "Top",
      type: "table",
      columnHeaders: ["SIZE", "EXTRA LARGE", "LARGE", "MEDIUM", "SMALL"],
      rowHeaders: ['SIZE', 'LENGTH', 'CHEST', 'NECK'],
      tableSection: "Top Measurement",
      rows: createTopData(),
      xs: 12,
    },
    // kits supplied
    {
      name: "Kits Supplied",
      type: "section-header",
      desc: ""
    },
    {
      type: "table",
      name: "Kit Information",
      columnHeaders: ["S/N", "KIT", "QUANTITY"],
      rowHeaders: [],
      rows: gen(),
      xs: 12,
    },
    // POSTING
    {
      name: "Posting",
      type: "section-header",
      desc: "",
    },
    {
      name: convertCamelCaseToTitleCase("jobExperience"),
      type: "text",
      value: formValues.posting.jobExperience,
      setValue: newValue => {
        let newObj = { ...formValues }
        newObj.posting.jobExperience = newValue
        setFormValues(newObj)
      },
      validator: () => console.log("Validating jobExperience"),
      required: true,
      xs: 4,
    },
    {
      name: convertCamelCaseToTitleCase("typeOfPrimaryAssignment"),
      type: "text",
      value: formValues.posting.typeOfPrimaryAssignment,
      setValue: newValue => {
        let newObj = { ...formValues }
        newObj.posting.typeOfPrimaryAssignment = newValue
        setFormValues(newObj)
      },
      validator: () => console.log("Validating typeOfPrimaryAssignment"),
      required: true,
      xs: 4,
    },
    {
      name: convertCamelCaseToTitleCase("institution"),
      type: "text",
      value: formValues.posting.institution,
      setValue: newValue => {
        let newObj = { ...formValues }
        newObj.posting.institution = newValue
        setFormValues(newObj)
      },
      validator: () => console.log("Validating institution"),
      required: true,
      xs: 4,
    },
    {
      name: convertCamelCaseToTitleCase("lga"),
      type: "text",
      value: formValues.posting.lga,
      setValue: newValue => {
        let newObj = { ...formValues }
        newObj.posting.lga = newValue
        setFormValues(newObj)
      },
      validator: () => console.log("Validating lga"),
      required: true,
      xs: 4,
    },
    {
      name: convertCamelCaseToTitleCase("town"),
      type: "text",
      value: formValues.posting.town,
      setValue: newValue => {
        let newObj = { ...formValues }
        newObj.posting.town = newValue
        setFormValues(newObj)
      },
      validator: () => console.log("Validating town"),
      required: true,
      xs: 4,
    },
    {
      name: convertCamelCaseToTitleCase("primAssignmentResidentialAddress"),
      type: "text",
      value: formValues.posting.primAssignmentResidentialAddress,
      setValue: newValue => {
        let newObj = { ...formValues }
        newObj.posting.primAssignmentResidentialAddress = newValue
        setFormValues(newObj)
      },
      validator: () => console.log("Validating primAssignmentResidentialAddress"),
      required: true,
      xs: 4,
    },
  ]

  return (
    <Box sx={{ padding: "2rem", }}>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          {formFields.map(form =>
            form.type === "text" ? <MyTextField form={form} />

              : form.type === "select" ? <MySelect form={form} />

                : form.type === "date" ? <MyDatePicker form={form} />

                  : form.type === "table" ? <MyTable form={form} />

                    : <MyFormHeader form={form} />

          )}

          <Grid item xs={12} sx={{marginTop: "16px"}}>
            <Button fullWidth variant='contained' >Submit</Button>
          </Grid>
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
