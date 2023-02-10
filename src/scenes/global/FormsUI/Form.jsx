import { Box, TextField, useMediaQuery } from '@mui/material';
import { getIn } from 'formik';
import React from 'react';

const Form = ({type, values, errors, touched, handleBlur, handleChange}) => {
    console.log(values)
    const isNonMobile=useMediaQuery("(min-width: 600px)")
    const formattedName=(field)=>`${type}.${field}`
    const formattedError=(field)=>Boolean(
        getIn(touched, (formattedName(field))) &&
        getIn(errors, (formattedName(field)))
    )
    const formattedHelper=(field)=>{
        getIn(touched, (formattedName(field))) &&
        getIn(errors, (formattedName(field)))
    }
    
    return (
        <Box
        display='grid'
        gap='15px'
        gridTemplateColumns={'repeat(4,  minmax(0, 1fr))'}
        sx={{
            "&>div": {gridColumn: isNonMobile? undefined : 'span 4'}
        }}
        >
            <TextField 
            fullWidth 
            type='text' 
            label='First Name'
            onBlur={handleBlur}
            value={values?.firstName}
            onChange={handleChange}
            name={formattedName('firstName')}
            error={formattedError('firstName')}
            helperText={formattedHelper('firstName')}
            sx={{gridColumn: 'span 2'}}
            />
            <TextField 
            fullWidth 
            type='text' 
            value={values?.lastName}
            label='Last Name'
            onBlur={handleBlur}
            onChange={handleChange}
            name={formattedName('lastName')}
            error={formattedError('lastName')}
            helperText={formattedHelper('lastName')}
            sx={{gridColumn: 'span 2'}}
            />
            <TextField 
            fullWidth 
            type='text' 
            label='Country'
            value={values?.country}
            onBlur={handleBlur}
            onChange={handleChange}
            name={formattedName('country')}
            error={formattedError('country')}
            helperText={formattedHelper('country')}
            sx={{gridColumn: 'span 4'}}
            />
            <TextField 
            fullWidth 
            type='text' 
            value={values?.street2}
            label='Street 1'
            onBlur={handleBlur}
            onChange={handleChange}
            name={formattedName('street1')}
            error={formattedError('street1')}
            helperText={formattedHelper('street1')}
            sx={{gridColumn: 'span 2'}}
            />
            <TextField 
            fullWidth 
            type='text' 
            value={values?.street2}
            label='Street 2 (optional)'
            onBlur={handleBlur}
            onChange={handleChange}
            name={formattedName('street2')}
            error={formattedError('street2')}
            helperText={formattedHelper('street2')}
            sx={{gridColumn: 'span 2'}}
            />
            <TextField 
            fullWidth 
            type='text' 
            label='State'
            value={values?.state}
            onBlur={handleBlur}
            onChange={handleChange}
            name={formattedName('state')}
            error={formattedError('state')}
            helperText={formattedHelper('state')}
            sx={{gridColumn: 'span 2'}}
            />
            <TextField 
            fullWidth 
            type='text' 
            label='Zip code'
            value={values?.zipCode}
            onBlur={handleBlur}
            onChange={handleChange}
            name={formattedName('zipCode')}
            error={formattedError('zipCode')}
            helperText={formattedHelper('zipCode')}
            sx={{gridColumn: 'span 2'}}
            />

        </Box>
    );
};

export default Form;