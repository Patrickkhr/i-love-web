export default function Title({title, emoji}) {
    return (
        <h1 className="text-3xl leading-normal sm:text-5xl sm:leading-normal font-body">
          <span className='rounded border-b-4 border-primary'>{title}</span>&nbsp;
          <span role="img" aria-label={title}>
            {emoji}
          </span>
      </h1>
    )
}