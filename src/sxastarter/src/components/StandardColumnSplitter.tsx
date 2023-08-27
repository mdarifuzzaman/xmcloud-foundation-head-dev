import React from 'react';
import {
  ComponentParams,
  ComponentRendering,
  Placeholder,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface ComponentProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
}

export const Default = (props: ComponentProps): JSX.Element => {
  const columnWidths = [
    props.params.ColumnWidth1,
    props.params.ColumnWidth2,
    props.params.ColumnWidth3,
    props.params.ColumnWidth4,
    props.params.ColumnWidth5,
    props.params.ColumnWidth6,
    props.params.ColumnWidth7,
    props.params.ColumnWidth8,
  ];
  const columnStyles = [
    props.params.Styles1,
    props.params.Styles2,
    props.params.Styles3,
    props.params.Styles4,
    props.params.Styles5,
    props.params.Styles6,
    props.params.Styles7,
    props.params.Styles8,
  ];
  const enabledPlaceholders = props.params.EnabledPlaceholders.split(',');
  return (
    <div className="row">
      <section className="small-12 columns vertical-container grey">
        <div className="body-content">
          <div className="row">
            <div className="small-12 columns">
              <div className="h4">Licensing</div>
              <div className="vertical-callouts" data-equalizer="description">
                {enabledPlaceholders.map((ph, index) => {
                  const phKey = `column-${ph}-{*}`;
                  const phStyles = `${columnWidths[+ph - 1]} ${
                    columnStyles[+ph - 1] ?? ''
                  }`.trimEnd();

                  return (
                    <div key={index} className={phStyles}>
                      <div key={index} className="row">
                        <Placeholder key={index} name={phKey} rendering={props.rendering} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
