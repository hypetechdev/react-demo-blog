import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
// import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
// import Container from '@material-ui/core/Container'
// import GitHubIcon from '@material-ui/icons/GitHub'
// import FacebookIcon from '@material-ui/icons/Facebook'
// import TwitterIcon from '@material-ui/icons/Twitter'

import FeaturedPost from './posts/FeaturedPost'

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}))

export default function Blog() {
    const classes = useStyles()

    return (
        <main>
            <FeaturedPost post={{}} />
            <Grid container spacing={4}>
                {/* {featuredPosts.map((post) => (
                    <FeaturedPost key={post.title} post={post} />
                ))} */}
            </Grid>
            <Grid container spacing={5} className={classes.mainGrid}>
                {/* <Main title="From the firehose" posts={posts} />
                <Sidebar
                    title={sidebar.title}
                    description={sidebar.description}
                    archives={sidebar.archives}
                    social={sidebar.social}
                /> */}
            </Grid>
        </main>
    )
}
