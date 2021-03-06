import React from 'react'
import ReactDOM from 'react-dom'
import { observer } from "mobx-react"
import * as styles from './pageenquire.sass'

export const EnquireSection1 = () => (
  <div className={styles.pageSectionContainer + " " + styles.pageSection1}>
    <div className={styles.pageSubSectionContainer}>
      <div className={styles.pageSectionTitle}>Enquire</div>
      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi.</p>
      <p>Optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
    </div>
  </div>
)

@observer
class PageEnquire extends React.Component {
  render() {
    return (
      <div>
        <EnquireSection1 />
      </div>
    )
  }
}

export default PageEnquire
