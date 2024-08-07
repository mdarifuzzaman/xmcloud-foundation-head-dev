import React from 'react';
import { ComponentParams, ComponentRendering, Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';

interface SnippetComponentProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: any
}

const SnippetComponent = (props: SnippetComponentProps): JSX.Element => {
  //const id = props.params.RenderingIdentifier;
  if(!props.fields){
    return <h1 className="icon-alarm">Datasource isnt set.</h1>
  }

  return (
    <>
      <Placeholder name="snippet-content" rendering={props.rendering}></Placeholder>
    </>
  );
};

export default SnippetComponent;
