import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Item from '@mui/material/Paper';
import { Stack } from '@mui/material';
type CharInfoProps = {
    Name?: string,
    Class?: string,
    Level?: string,
    Background?: string,
    Race?: string,
    Alignment?: string,
    Experience?: string,
    HitPoints?: string
}

export const CharInfo: React.FC<CharInfoProps> = () => {

    const [state, setState] = React.useState<CharInfoProps>()
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setState({...state, [name]: value});
    }

    return (

        <Grid container spacing={2} sx={{marginTop: 2, marginBottom: 2}} >
            <Stack spacing={2}>
                <Item>
                    <TextField 
                        label="Name"
                        aria-label='Name'
                        name='Name'
                        value={state?.Name}
                        onChange={handleChange}
                        sx={{minWidth: '700px'}}
                    />
                </Item>

      
                    
                    <Grid container spacing={2} sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', Width: '700px'}}>
                        <Grid size="grow">
                            <Item>
                                <TextField 
                                    label="Class"
                                    aria-label='Class'
                                    name='Class'
                                    value={state?.Class}
                                    onChange={handleChange}
                                    sx={{ width: '100%' }}
                    
                                />
                            </Item>
                        </Grid>
                        
                        <Grid size={4}>
                            <Item>
                                <TextField
                                    label="Level"
                                    aria-label='Level'
                                    name='Level'
                                    value={state?.Level}
                                    onChange={handleChange}
                                    sx={{ width: '100%' }}
                                    
                                />
                            </Item>
                        </Grid>
                    </Grid>



                <Item>
                    <TextField
                        label="Background"
                        aria-label='Background'
                        name='Background'
                        value={state?.Background}
                        onChange={handleChange}
                        sx={{minWidth: '700px'}}
                    />
                </Item>

                <Item>
                    {JSON.stringify(state)}
                </Item>
            </Stack>            
        </Grid>
    )
}










/*

        <Formik initialValues={{Name: '', Class: '', Level: '', Background: '', Race: '', Alignment: '', Experience: '', HitPoints: ''}} onSubmit={(values) => {
            onSubmit(values)
        }}>
           
            {({values, handleChange, handleBlur}) => (
                <Form>
                    <TextField name='Name' value={values.Name} onChange={handleChange} onBlur={handleBlur}/>
                    <TextField name='Class' value={values.Class} onChange={handleChange} onBlur={handleBlur}/>
                    <TextField name='Level' value={values.Level} onChange={handleChange} onBlur={handleBlur}/>
                    <TextField name='Background' value={values.Background} onChange={handleChange} onBlur={handleBlur}/>
                    <TextField name='Race' value={values.Race} onChange={handleChange} onBlur={handleBlur}/>
                    <TextField name='Alignment' value={values.Alignment} onChange={handleChange} onBlur={handleBlur}/>
                    <TextField name='Experience' value={values.Experience} onChange={handleChange} onBlur={handleBlur}/>
                    <TextField name='Hitpoint' value={values.HitPoints} onChange={handleChange} onBlur={handleBlur}/>
                
                </Form>
            
            )}
        </Formik>
        
*/