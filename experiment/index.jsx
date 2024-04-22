
<Box>

{
    data.map(i=>(
        <Grid>
            <Text>{i[0].head}</Text>
            <Grid>
                {
                    i.map(index=>(
                        
                        <Grid>
                            <Image/>
                            <Text></Text>
                            <Button></Button>
                        </Grid>
                    ))
                }
            </Grid>
        </Grid>
    ))
}

</Box>