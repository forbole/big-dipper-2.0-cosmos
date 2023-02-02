import Typography from '@mui/material/Typography';
import ReactMarkdown from 'markdown-to-jsx';
import xss from 'xss';
// import Link from '@mui/material/Link';

// const styles = (theme) => ({
//   listItem: {
//     marginTop: theme.spacing(1),
//   },
// });

const options = {
  // disableParsingRawHTML: true,
  forceBlock: true,
  components: {
    h1: {
      styleOverrides: {
        component: Typography,
        props: {
          variant: 'h1',
        },
      },
    },
    h2: {
      styleOverrides: {
        component: Typography,
        props: {
          variant: 'h2',
        },
      },
    },
    h3: {
      styleOverrides: {
        component: Typography,
        props: {
          variant: 'h3',
        },
      },
    },
    h4: {
      styleOverrides: {
        component: Typography,
        props: {
          variant: 'h4',
        },
      },
    },
    h5: {
      styleOverrides: {
        component: Typography,
        props: {
          variant: 'h5',
        },
      },
    },
    h6: {
      styleOverrides: {
        component: Typography,
        props: {
          variant: 'h6',
        },
      },
    },
    default: {
      styleOverrides: {
        component: Typography,
        props: {
          variant: 'h6',
          // variant: 'body1',
        },
      },
    },
    p: {
      styleOverrides: {
        component: Typography,
        props: {
          variant: 'body1',
        },
      },
    },
    span: {
      styleOverrides: {
        component: Typography,
        props: {
          variant: 'body1',
        },
      },
    },
    // li: {
    //   styleOverrides: {
    //     component: withStyles(styles)(({
    //       classes, ...props
    //     }) => (
    //       <li className={classes.listItem}>
    //         <Typography component="span" {...props} />
    //       </li>
    //     )),
    //   },
    // },
  },
};

export default function Markdown(props: { markdown: string }) {
  const clean = xss(props.markdown.replace(/\\n\s?/g, '<br/>'));
  // clean = clean.replace(/\\n\s?/g, '\n'); // this will also work

  return <ReactMarkdown options={options}>{clean}</ReactMarkdown>;
}
