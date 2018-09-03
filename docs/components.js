import React from 'react'
import {
  Head,
  Layout,
  NavLinks,
  NavLink,
  Pagination,
  ComponentProvider,
  StyleProvider,
  ScrollTop,
  DocsLayout
} from 'mdx-go'
import { Box, Flex } from 'grid-styled/emotion'
import Logo from './logo'

const green = '#0d3'
const darkgreen = '#0a6'
const black = '#001600'
// const lightgray = '#f6f9f6'
const lightgray = '#f6f6ff'
const blue = '#07c'


const gradient = `
linear-gradient(
  150deg,
  transparent 90%,
  rgba(0, 191, 0, 0.25) 90%,
  rgba(0, 191, 0, 0.25) 95%,
  rgba(0, 191, 0, 0.5) 95%
)
`

const nav = [
  'Home',
  'Getting Started',
  'Using MDX',
  'Routing',
  'Configuration',
  // 'CSS-in-JS',
  'Exporting',
  'Head',
  'Link',
  'ComponentProvider',

  'LiveCode',
  'Layout',
  'NavLinks',
  'Pagination',
  'ScrollTop',
  'StyleProvider',
  'DocsLayout',

  'Typography',
]

const theme = {
  colors: {
    lightgray,
    black,
    blue,
    green,
    darkgreen,
  },
  code: {
    color: darkgreen
  },
  pre: {
    // color: darkgreen
  }
}

const PageLayout = props => props.location.pathname === '/'
  ? props.children
  : (
    <StyleProvider
      color='black'
      theme={theme}>
      <Layout>
        <Layout.MenuToggle m={2} />
        {false && (
          <Layout.NavBar bg='lightgray'>
            <Layout.MenuToggle px={2} />
            <Box mx='auto' />
            <b>mdx-go</b>
            <Box mx='auto' pr={40} />
          </Layout.NavBar>
        )}
        <Layout.Sidebar
          bg='lightgray'>
          <Box px={3} py={3}>
            <Logo size={48} />
          </Box>
          <NavLinks
            {...props}
            filter={route => nav.includes(route.name)}
            order={nav}
            py={2}
            css={{
              '&.active': {
                color: green
              }
            }}
          />
          <Box py={2} />
          <NavLink
            href='https://github.com/jxnblk/mdx-go'
            children='GitHub'
          />
          <Box py={4} />
        </Layout.Sidebar>
        <Layout.Main>
          {props.children}
          <Pagination
            {...props}
            filter={route => nav.includes(route.name)}
            order={nav}
          />
        </Layout.Main>
      </Layout>
      <ScrollTop />
    </StyleProvider>
  )

export const Root = props =>
  <React.Fragment>
    <Head>
      <title>mdx-go</title>
      <meta name='description' content='Lightning-fast MDX-based dev server' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@jxnblk' />
      <meta name='twitter:title' content='mdx-go' />
      <meta name='twitter:description' content='Lightning-fast MDX-based dev server for progressive documentation' />
      <meta name='twitter:image' content='https://jxnblk.com/mdx-go/card.png' />
    </Head>
    <PageLayout {...props} />
  </React.Fragment>


export const Banner = props =>
  <Box
    {...props}
    color='white'
    bg={black}
    css={{
      backgroundSize: 'cover',
      backgroundImage: gradient
    }}
  />

export const Title = props =>
  <Box
    {...props}
    is='h1'
    m={0}
    fontSize={[ 6, 7 ]}
    css={{
      fontWeight: 600
    }}
  />

export const Text = props =>
  <Box
    is='p'
    m={0}
    {...props}
    css={{
      fontWeight: 600
    }}
  />

export const Button = props =>
  <Box
    {...props}
    is='a'
    px={4}
    py={2}
    fontSize={1}
    color={black}
    bg={green}
    css={{
      display: 'inline-block',
      fontWeight: 600,
      textDecoration: 'none',
      borderRadius: '8px'
    }}
  />

export const Container = props =>
  <Box
    {...props}
    mx='auto'
    px={4}
    css={{
      maxWidth: '1024px'
    }}
  />

export const Col = props =>
  <Box
    {...props}
    px={3}
    py={3}
    width={[ 1, 1/2, ]}
  />

export const Link = props =>
  <Box
    {...props}
    is='a'
    css={{
      display: 'inline-block',
      color: 'inherit',
      textDecoration: 'none',
      fontWeight: 600,
      '&:hover': {
        color: green
      }
    }}
  />

export const Pre = props =>
  <Box
    {...props}
    is='pre'
    color={green}
    fontSize={2}
    css={{
      fontFamily: 'Menlo, monospace',
    }}
  />

export const Divider = props =>
  <Box
    {...props}
    is='hr'
    my={5}
    width={128}
    ml={0}
    bg={green}
    css={{
      border: 0,
      height: '4px'
    }}
  />
