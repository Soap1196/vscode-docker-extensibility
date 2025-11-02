/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { z } from 'zod/v4';

const PodmanPodPortBindingSchema = z.object({
    /* eslint-disable @typescript-eslint/naming-convention */
    host_ip: z.string().optional(),
    pod_port: z.number(),
    host_port: z.number().optional(),
    protocol: z.enum(['udp', 'tcp']),
    /* eslint-enable @typescript-eslint/naming-convention */
});

export const PodmanListPodRecordSchema = z.object({
    Id: z.string(),
    Name: z.string(),
    Ports: z.array(PodmanPodPortBindingSchema).optional().nullable(),
    Networks: z.array(z.string()).optional().nullable(),
    Labels: z.record(z.string(), z.string()).optional().nullable(),
    Created: z.number(),
    State: z.string(),
    Status: z.string(),
});

export type PodmanListPodRecord = z.infer<typeof PodmanListPodRecordSchema>;
