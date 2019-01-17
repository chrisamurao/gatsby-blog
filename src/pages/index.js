import React from 'react'
import {graphql, Link, withPrefix} from 'gatsby'
// import kebabCase from 'lodash/kebabcase'
import styled from 'styled-components'
import {OutboundLink} from 'gatsby-plugin-google-analytics'

import Layout from '../components/layout'
import {LARGER_WORKS} from '../works/larger-works'

// import '../css/index.css';

const DEFAULT_MARGIN = 30
const SMALL_THUMBNAIL_HEIGHT = 100
const SCROLL_BAR_HEIGHT = 20

const BLOCKS_ID = 'blocks'
const OBSERVABLE_ID = 'observable'

const BlogPreview = styled.div`
  margin-bottom: ${DEFAULT_MARGIN}px;
`

const BlogMetadata = styled.div`
  color: #a3a3a3;
  display: inline-block;
  font-size: 12px;
  margin-bottom: 5px;
`

const BlogTag = styled(Link)`
  color: #a3a3a3;
  display: inline-block;
  font-size: 12px;
  padding-right: 10px;
  transition: color 0.2s ease;
  &:hover {
    color: black;
  }
`

const MiddleDot = styled.span`
  font-size: 12px;
  padding: 0 10px;
`

const ReadLink = styled(Link)`
  display: block;
  font-size: 12px;
  letter-spacing: 0.05rem;
  margin-bottom: 60px;
  margin-top: ${DEFAULT_MARGIN}px;
`

const WorksSection = styled.div`
  margin: ${DEFAULT_MARGIN}px 0 60px 0;
`

const LargerWorksCarousel = styled.div`
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  white-space: nowrap;
`

const SmallerWorksCarousel = styled.div`
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: ${SMALL_THUMBNAIL_HEIGHT +
    2 * (SMALL_THUMBNAIL_HEIGHT + DEFAULT_MARGIN) +
    SCROLL_BAR_HEIGHT}px;
  white-space: nowrap;
`

const LargerWorks = styled.div`
  display: inline-block;
  margin-right: ${DEFAULT_MARGIN}px;
  vertical-align: top;
  width: 367px;
`

const SmallerWorks = styled.div`
  &:not(:nth-child(3n)) {
    margin-bottom: ${DEFAULT_MARGIN}px;
  }
  margin-right: ${DEFAULT_MARGIN}px;
  display: inline-block;
`

const SmallerWorkImage = styled.img`
  margin-left: -5px;
  margin-top: ${props => (props.workType === OBSERVABLE_ID ? '-8px' : '0')};
  height: ${props => (props.workType === OBSERVABLE_ID ? '120px' : '100px')};
`

const Thumbnail = styled.div`
  background-color: #b2c5d4;
  border-radius: 4px;
  height: ${props =>
    props.size === 'larger' ? '200px' : `${SMALL_THUMBNAIL_HEIGHT}px`};
  overflow: hidden;
  width: ${props => (props.size === 'larger' ? '367px' : '184px')};
`

const ThumbnailImage = styled.img`
  width: ${props => (props.size === 'larger' ? '367px' : '184px')};
`

const WorkDetails = styled.div`
  padding: ${DEFAULT_MARGIN}px;
`

const WorkTitle = styled(OutboundLink)`
  color: black;
  display: block;
  margin-bottom: ${DEFAULT_MARGIN}px;
`

const WorkTitleLink = styled(Link)`
  color: black;
  display: block;
  margin-bottom: ${DEFAULT_MARGIN}px;
`

const WorkDescription = styled.div`
  color: #a3a3a3;
  font-size: 12px;
  white-space: normal;
`

const Tabs = styled.ul`
  margin-left: 0;
  margin-bottom: ${DEFAULT_MARGIN}px;
`

const Tab = styled.li`
  color: ${props => (props.selected ? 'black' : '#A3A3A3')};
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  margin-right: ${DEFAULT_MARGIN}px;
  min-width: ${DEFAULT_MARGIN}px;
  transition: color 0.2s ease;
  &:hover {
    color: black;
  }
`

function formatData(ts) {
  const date = new Date(Number(ts))
  const month = date.getMonth()
  const monthIndexToMonthText = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  return monthIndexToMonthText[month] + ' ' + date.getFullYear()
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedSmallerWorkType: 'all',
      selectedWrittenWorkTag: 'all',
    }
  }

  _filterSmallerWork(workType) {
    this.setState({selectedSmallerWorkType: workType})
  }

  _filterWrittenWork(tag) {
    this.setState({selectedWrittenWorkTag: tag})
  }

  render() {
    const {selectedSmallerWorkType, selectedWrittenWorkTag} = this.state
    const {data, pageContext} = this.props
    const {edges: posts} = data.allMarkdownRemark
    const {smallerWorks} = pageContext
    return (
      <Layout>
        <WorksSection>
          <h2> Projects </h2>
          <LargerWorksCarousel>
            {LARGER_WORKS.sort((a, b) => b.createdAt - a.createdAt).map(
              work => (
                <LargerWorks key={work.url}>
                  <Thumbnail size={'larger'}>
                    <OutboundLink
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ThumbnailImage
                        alt={work.title}
                        size={'larger'}
                        src={withPrefix(work.thumbnail)}
                      />
                    </OutboundLink>
                  </Thumbnail>
                  <WorkDetails>
                    <BlogMetadata>{formatData(work.createdAt)}</BlogMetadata>
                    <WorkTitle
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {work.title}
                    </WorkTitle>
                    <WorkDescription>{work.description}</WorkDescription>
                  </WorkDetails>
                </LargerWorks>
              )
            )}
          </LargerWorksCarousel>
        </WorksSection>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: {frontmatter: {published: {ne: false}}}
      sort: {order: DESC, fields: [frontmatter___date]}
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date
            tags
            path
          }
        }
      }
    }
  }
`
