import {
	AbsoluteFill,
	// useVideoConfig,
	OffthreadVideo,
	staticFile,
} from 'remotion';
import {z} from 'zod';

export const myCompSchema = z.object({
	titleText: z.string(),
});

export const Funni: React.FC<z.infer<typeof myCompSchema>> = ({
	titleText: propOne,
}) => {
	// const {durationInFrames, fps} = useVideoConfig();

	return (
		<AbsoluteFill style={{backgroundColor: 'rgba(255,255,255)'}}>
			<OffthreadVideo src={staticFile('/vido/vidTemplate.mp4')} />
		</AbsoluteFill>
	);
};
