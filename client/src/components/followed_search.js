import React, { useState, useContext } from 'react'

import { Box, Button, Text, Flex, SearchField } from 'gestalt'

import 'gestalt/dist/gestalt.css'
import { SearchContext } from '../pages/front_page'
import { getUserFollowing } from '../routes/spotify'

export function FollowedSearch ({ setData, loggedIn }) {
    const isEmpty = useContext(SearchContext)
    const [searchText, setSearchText] = useState('')

    // get following if results is empty
    React.useEffect(() => {
        if (isEmpty && loggedIn) { getUserFollowing(setData) }
    }, [])

    return (
        <Box width="55%" marginBottom={8} marginTop={4} marginEnd={3} alignSelf="center">
            <Flex gap={2}>
                <Flex.Item flex="grow" >
                    <SearchField
                        size='lg'
                        accessibilityLabel="Search Bar"
                        accessibilityClearButtonLabel="Clear search field"
                        placeholder={'Search'}
                        id="followedSearchField"
                        value={searchText}
                        onChange={(val) => { setSearchText(val.value) }}
                        onKeyDown={(props) => { const keyPressed = props.event.code }}
                    />
                </Flex.Item>
                <Button
                    size='lg'
                    text="Search"
                    onClick={() => { }}
                />
            </Flex>

            { !loggedIn &&
                <Flex justifyContent='center'>
                    <Box padding={12} marginTop={6}>
                        <Text size='400' weight='bold'> Not Logged In! </Text>
                    </Box>
                </Flex> }
        </Box>

    )
}
