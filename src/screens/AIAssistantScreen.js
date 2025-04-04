import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator
} from 'react-native';
import globalStyles, { colors } from '../styles/globalStyles';

const AIAssistantScreen = () => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: 'Hello! I\'m your Aqua 360 assistant. How can I help you today?', 
      isUser: false 
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = () => {
    if (!query.trim()) return;
    
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: query,
      isUser: true
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    // Simulate AI response (in a real app, this would be an API call to GPT)
    setTimeout(() => {
      const botResponses = {
        'hours': 'Aqua 360 is open from 9 AM to 7 PM Monday through Friday, and 8 AM to 9 PM on weekends.',
        'price': 'Our standard admission is $25 for adults and $15 for children. We also offer family packages starting at $60.',
        'discount': 'We currently have a weekday special with 20% off for family packages!',
        'facilities': 'Aqua 360 features water slides, wave pools, a relaxation area, kids zone, food court, and locker rooms.',
        'booking': 'You can book your visit through our app or website. Just navigate to the Booking section and fill in your details!'
      };
      
      let botReply = 'I\'m not sure about that. Would you like me to connect you with a human representative?';
      
      // Simple keyword matching (a real GPT integration would be more sophisticated)
      for (const [keyword, response] of Object.entries(botResponses)) {
        if (query.toLowerCase().includes(keyword)) {
          botReply = response;
          break;
        }
      }
      
      const botMessage = {
        id: messages.length + 2,
        text: botReply,
        isUser: false
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
      setQuery('');
    }, 1000);
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.header}>AI Assistant</Text>
        <Text style={styles.subheader}>Ask me anything about Aqua 360!</Text>
      </View>
      
      <ScrollView style={styles.messagesContainer}>
        {messages.map(message => (
          <View
            key={message.id} 
            style={[
              styles.messageBubble, 
              message.isUser ? styles.userMessage : styles.botMessage
            ]}
          >
            <Text style={[
              styles.messageText, 
              {color: message.isUser ? colors.darkGrey : colors.white}
            ]}>
              {message.text}
            </Text>
          </View>
        ))}
        
        {isLoading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="small" color={colors.primary} />
          </View>
        )}
      </ScrollView>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ask a question here..."
          placeholderTextColor={colors.placeholderText}
          value={query}
          onChangeText={setQuery}
          multiline
        />
        <TouchableOpacity 
          style={styles.sendButton}
          onPress={handleSend}
          disabled={!query.trim()}
        >
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.suggestionsContainer}>
        <Text style={styles.suggestionsTitle}>Suggested Questions:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {['What are your hours?', 'How much is admission?', 'Any discounts?', 'What facilities do you have?'].map((suggestion, index) => (
            <TouchableOpacity 
              key={index}
              style={styles.suggestionChip}
              onPress={() => {
                setQuery(suggestion);
              }}
            >
              <Text style={styles.suggestionText}>{suggestion}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  headerContainer: {
    padding: 20,
    paddingTop: 40,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: colors.primary,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
  },
  subheader: {
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
    marginTop: 5,
  },
  messagesContainer: {
    flex: 1,
    padding: 15,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 18,
    marginBottom: 10,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: colors.white,
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: colors.primary,
  },
  messageText: {
    fontSize: 16,
  },
  loadingContainer: {
    padding: 10,
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: colors.lightGrey,
    backgroundColor: colors.white,
  },
  input: {
    flex: 1,
    backgroundColor: colors.lightGrey,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
    fontSize: 16,
    maxHeight: 100,
  },
  sendButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    justifyContent: 'center',
  },
  sendButtonText: {
    color: colors.white,
    fontWeight: 'bold',
  },
  suggestionsContainer: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: colors.lightGrey,
  },
  suggestionsTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 8,
  },
  suggestionChip: {
    backgroundColor: colors.white,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
  },
  suggestionText: {
    fontSize: 14,
    color: colors.primary,
  },
});

export default AIAssistantScreen;
