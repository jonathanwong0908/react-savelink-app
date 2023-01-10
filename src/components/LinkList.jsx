const LinkList = ({ links }) => {
  return (
    <div className="linkContainer">
      {links.length
        ? links.map(link => (
          <p key={link}>{link}</p>
        ))
        : <>No links yet</>
      }
    </div>
  )
}

export default LinkList