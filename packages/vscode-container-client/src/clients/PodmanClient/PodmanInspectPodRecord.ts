
import { z } from 'zod/v4';

const PodmanInspectPodConfigSchema = z.object({
    Entrypoint: z.union([z.array(z.string()), z.string(), z.null()]).optional(),
    Cmd: z.union([z.array(z.string()), z.string(), z.null()]).optional(),
    Env: z.array(z.string()).optional(),
    ExposedPorts: z.record(z.string(), z.unknown()).nullable().optional(),
    WorkingDir: z.string().nullable().optional(),
    Pods: z.record(z.string(), z.unknown()).nullable().optional(),
});
