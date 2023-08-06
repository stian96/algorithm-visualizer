from app.algorithms.searching_algorithms import SearchingAlgorithms


class TestSearchingAlgorithms:

    def test_linear_search_element_present(self):

        # Setup.
        array = [x for x in range(1, 6)]
        search = SearchingAlgorithms(array)

        # Action.
        result = search.linear_search(array[3])

        # Assert.
        assert result[-1]['found'] == True
        assert result[-1]['value'] == 4
        assert len(result) == 4

    def test_linear_search_element_absent(self):

        # Setup.
        array = [x for x in range(1, 6)]
        search = SearchingAlgorithms(array)

        # Action.
        result = search.linear_search(7)

        # Assert.
        assert result[-1]['found'] == False
        assert len(result) == len(array)

    def test_linear_search_empty_array(self):

        # Setup.
        array = []
        search = SearchingAlgorithms(array)

        # Action.
        result = search.linear_search(3)

        # Assert.
        assert len(result) == 0
