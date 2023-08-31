#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkDemoStack } from '../lib/cdk-demo-stack';

const app = new cdk.App();
new CdkDemoStack(app, 'CdkDemoStack', {

	env: { account: '568975345534', region: 'ap-northeast-1' },

  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});