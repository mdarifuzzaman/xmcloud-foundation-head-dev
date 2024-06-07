
import { EditFrameDataSource, EditButtonTypes } from '@sitecore-jss/sitecore-jss/utils'
import React, { PropsWithChildren } from 'react';

export interface EditFrameProps {
    dataSource?: EditFrameDataSource;
    buttons?: EditButtonTypes;
    title?: string;
    tooltip?: string;
    cssClass?: string;
    parameters?: Record<string, string | number | boolean | undefined | null>;
}

export declare const EditFrame: React.FC<PropsWithChildren<EditFrameProps>>;
