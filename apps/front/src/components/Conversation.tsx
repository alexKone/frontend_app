interface ConversationProps {
  item: any;
}

const Conversation = ({ item }: ConversationProps) => {
  console.log(item);

  return (
    <div>conversation</div>
  )
}

export default Conversation;
