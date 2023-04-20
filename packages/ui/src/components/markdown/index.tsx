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

type MarkdownProp = {
  markdown: string;
  readMore?: boolean | undefined;
};

export default function Markdown({ markdown, readMore }: MarkdownProp) {
  const clean = xss(markdown.replace(/\\n\s?/g, '<br/>'));
  // clean = clean.replace(/\\n\s?/g, '\n'); // this will also work
  const delimiter = '<br>';
  const limit = 3;
  const less = clean.split(delimiter).slice(0, limit).join(delimiter);
  const result = readMore ? less : clean;

  return <ReactMarkdown options={options}>{result}</ReactMarkdown>;
}
